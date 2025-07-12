from flask import Flask, request, jsonify
import smtplib
from email.message import EmailMessage
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend JS to access the API

EMAIL_ADDRESS = "muskansharma23115@gmail.com"        
EMAIL_PASSWORD = "vtdo iqha qlgc jgao" 

@app.route('/send-query', methods=['POST'])
def send_query():
    data = request.get_json()
    name = data['name']
    email = data['email']
    message = data['message']

    try:
        msg = EmailMessage()
        msg['Subject'] = "New Customer Query from Luxora"
        msg['From'] = email
        msg['To'] = EMAIL_ADDRESS
        msg.set_content(f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}")

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)

        return jsonify({"status": "success", "message": "Message sent to admin!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
