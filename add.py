# app.py
from flask import Flask, render_template
import data

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', data=data.bio_data)

if __name__ == '__main__':
    app.run(debug=True)
