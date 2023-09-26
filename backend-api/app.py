from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt

def classify_waste_image(image_path):
    model = tf.keras.models.load_model('plastic_waste_model.h5')

    img = tf.keras.preprocessing.image.load_img(image_path, target_size=(256, 256))
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)

    predictions = model.predict(img_array)
    classes = ['1_polyethylene_PET', '2_high_density_polyethylene_PE-HD', '3_polyvinylchloride_PVC', '4_low_density_polyethylene_PE-LD', '5_polypropylene_PP', '6_polystyrene_PS', '7_other_resins', '8_no_plastic']
    print(np.argmax(predictions))
    predicted_class = classes[np.argmax(predictions)]
    confidence_scores = {class_name: confidence for class_name, confidence in zip(classes, predictions[0])}

    return predicted_class, confidence_scores

@app.route('/predict', methods=['POST'])
def predict():
    img = request.files['image']
    print(img)

    filename = secure_filename(img.filename)
    img.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    image_url = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    predicted_class, confidence_scores = classify_waste_image(image_url)

    class_classification = {
        '1_polyethylene_PET': 'Recyclable',        # PET (Polyethylene Terephthalate)
        '2_high_density_polyethylene_PE-HD': 'Recyclable',  # HDPE (High-Density Polyethylene)
        '3_polyvinylchloride_PVC': 'Non-Recyclable',       # PVC (Polyvinyl Chloride)
        '4_low_density_polyethylene_PE-LD': 'Recyclable',   # LDPE (Low-Density Polyethylene)
        '5_polypropylene_PP': 'Recyclable',       # PP (Polypropylene)
        '6_polystyrene_PS': 'Non-Recyclable',     # PS (Polystyrene)
        '7_other_resins': 'Non-Recyclable',       # Other resins category
        '8_no_plastic': 'Non-Recyclable'          # Not made of plastic
    }
    is_recyclable = class_classification[predicted_class]
    return jsonify({'result': is_recyclable})

@app.route("/", methods=["GET"])
def func():
    return jsonify({'result': 'hello'})
if __name__ == '__main__':
    app.run(debug=True)