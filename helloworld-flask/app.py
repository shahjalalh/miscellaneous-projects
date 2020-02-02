from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World!"

@app.route('/add_two_nums', method=["POST"])
def add_two_nums:

    # Get x, y from posted data
    dataDict = request.get_json()

    x = dataDict['x']
    y = dataDict['y']

    # Add z = x + y
    z = x + y

    # Prepare a JSON, 'z': z
    retJSON = {
        'z': z
    }

    # return jsonify(map_prepared)
    return jsonify(retJSON), 200

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