from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "").lower()

    # Simple chatbot logic
    if user_message == "hy":
        bot_reply = "Hello, I am Naincy!"
    elif user_message == "bye":
        bot_reply = "Goodbye! Have a great day!"
    else:
        bot_reply = "Sorry, I didn't understand that."

    return jsonify({"reply": bot_reply})

@app.route("/")
def home():
    return "Welcome to Naincy's Chatbot Backend!"

if __name__ == "__main__":
    app.run()
