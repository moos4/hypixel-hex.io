const enchantments = `
[
  {  "name": "sharpness",
    "minecraft:attributes": [
     {
       "id": "block_interaction_range",
       "amount": {
         "type": "linear",
         "base": 1,
         "per_level_above_first": 1
       },
       "operation": "add_value"
     }
    ]
  }
]`

/*
{  "name": "any",
    "minecraft:attributes": [
     {
       "id": "something",
       "amount": { can olso just be set to a number for a constant value
         "type": "linear", linear, levels_squared, clamped, fraction, lookup
         "base": 1,
         "per_level_above_first": 1
       },
       "operation": "any" add_value, add_multiplied_base, add_multiplied_total
     }
    ]
  }
*/