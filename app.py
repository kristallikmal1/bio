# app.py
from flask import Flask, render_template
import data
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', data=data.bio_data)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
