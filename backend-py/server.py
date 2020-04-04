from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['http://localhost:1234'])

@app.route('/hello', methods=['POST'])
def hello():
  json = request.json
  name = json['name']
  return jsonify({ 'message': f'Hello {name}' })