const enchantments = `
[
  {  "name": "sharpness",
    "minecraft:attributes": [
     {
       "id": "final_meelee_damage",
       "amount": {
         "type": "linear",
         "base": 5,
         "per_level_above_first": 5
       },
       "operation": "add_multiplied_base"
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