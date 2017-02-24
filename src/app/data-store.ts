export var mockDb = {
  "registrants": {
    "vito_key": {
      "company": "Vito's Pizza",
      "name": "Pat Leccesse",
      "stripeId": "l3k34k6ad9b923_s3kj",
      "events": {
        "event_key": {
          "max": 40,
          "min": 0,
          "name": "Croatian Barbeque",
          "chargeClientFees": true,
          "participants": [{
            "name": "Bob Smith",
            "paid": true,
            "email": "bobsmith@gmail.com",
            "options": {
              "dinner": 3, //3 vegetarian or something
              "wine": true
            }
          }, {
              "name": "Charlie Coleman",
              "paid": true,
              "email": "cc@com.com",
              "options": {
                "dinner": 2, //3 vegetarian or something
                "wine": true
              }
            }]
        }
      }
    }
  }
}
