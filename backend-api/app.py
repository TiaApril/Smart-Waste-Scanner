from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/predict', methods=['POST'])
def predict():
    img = request.files['image']
    print(img)

    filename = secure_filename(img.filename)
    img.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    image_url = os.path.join(app.config['UPLOAD_FOLDER'], filename)

    # result = predict_image(image_url)

    return jsonify({'result': image_url})


@app.route("/", methods=["GET"])
def func():
    return jsonify({'result': 'hello'})

if __name__ == '__main__':
    app.run(debug=True)