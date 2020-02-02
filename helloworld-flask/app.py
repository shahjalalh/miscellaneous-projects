from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World!"

@app.route('/bye')
def bye_there():
    data = {
        'name': 'Elfarouk',
        'age': 22,
        'phones': [
            {
                'phoneName': 'iPhone8',
                'phoneNumber': 23123323
            },
            {
                'phoneName': 'Nokia',
                'phoneNumber': 938928388
            }
        ]
    }

    return jsonify(data)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=80)