let runned = false

const addCustomBlocks = (Blockly) => {

  if (runned) return
  runned = true

  Blockly.defineBlocksWithJsonArray(
    [{
      "type": "resize_canvas",
      "message0": "Define canvas size %1 Width: %2 px %3 Height: %4 px",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_number",
          "name": "canvas_width",
          "value": 100,
          "precision": 1
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_number",
          "name": "canvas_height",
          "value": 100,
          "precision": 1
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 0,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "fill_canvas",
      "message0": "Fill zone in %1 x %2 x %3 witdh %4 height %5 color %6",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "witdh",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "height",
          "check": "Number"
        },
        {
          "type": "field_colour",
          "name": "NAME",
          "colour": "#ff0000"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "write_text_canvas",
      "message0": "Write text %1 x %2 y %3 text %4 text size (px) %5 color %6",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "text",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "text_size",
          "check": "Number"
        },
        {
          "type": "field_colour",
          "name": "NAME",
          "colour": "#ff0000"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "get_pixel_color_canvas",
      "message0": "Get pixel color %1 x %2 y %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "print",
      "message0": "print in terminal %1",
      "args0": [
        {
          "type": "input_value",
          "name": "msg",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "Write text on the terminal",
      "helpUrl": ""
    },
    {
      "type": "fill_canvas_colour",
      "message0": "Fill zone in %1 x %2 x %3 witdh %4 height %5 color %6",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "witdh",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "height",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "colour"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    }],
  )
}

export default addCustomBlocks;