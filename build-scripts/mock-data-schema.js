export const schema = {
  "type": "object",
  "properties": {
    "things": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "name.firstName"
          },
          "alias": {
            "type": "string",
            "faker": "name.firstName"
          },
          "origin": {
            "type": "string",
            "faker": "address.city"
          }
        },
        "required": ["id", "name", "alias", "origin"]
      }
    }
  },
  "required": ["things"]
};
