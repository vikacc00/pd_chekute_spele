from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/new_expression')
def new_expression():
    # Genere random saskaitīšanas vai atņemšanas uzdevumu
    num1 = random.randint(1, 100)
    num2 = random.randint(1, 100)
    operation = random.choice(['+', '-'])

    if operation == '+':
        correct_answer = num1 + num2
    else:
        correct_answer = num1 - num2

    expression = f"{num1} {operation} {num2}"

    return jsonify({
        'expression': expression,
        'correctAnswer': correct_answer
    })

if __name__ == '__main__':
    app.run(debug=True)

