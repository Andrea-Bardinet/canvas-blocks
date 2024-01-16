import { Translation } from "../../langs/translation";

const t: Function = Translation.translate;


const addCustomBlocks = (Blockly: any) => {

  Blockly.defineBlocksWithJsonArray(
    [{
      "type": "resize_canvas",
      "message0": `${t("resize_canvas")} %1 ${t("width")}: %2 px %3 ${t("height")}: %4 px`,
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
      "message0": `${t("fill_canvas")}%1 x %2 x %3 ${t("width")} %4 ${t("height")} %5 ${t("color")} %6`,
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
      "message0": `${t("write_text_canvas")}%1 x %2 x %3 ${t("width")} %4 ${t("height")} %5 ${t("color")} %6`,
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
      "message0": `${t("get_pixel_color_canvas")}%1 x %2 y %3`,
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
      "message0": `${t("print")}%1`,
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
      // "message0": "Fill zone in %1 x %2 x %3 witdh %4 height %5 color %6",
      "message0": `${t("fill_canvas")} %1 x %2 y %3 ${t("width")} %4 ${t("height")} %5 ${t("color")} %6`,
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
    }, {
      "type": "draw_line",
      "message0": `${t("draw_line")} %1 x1 %2 y1 %3 x2 %4 y2 %5 ${t("lineWidth")} %6 ${t("color")} %7`,
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x1",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "y1",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "x2",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "y2",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "lineWidth",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "colour",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Draw Line from (x1;y1) to (x2;y2)",
      "helpUrl": ""
    }, {
      "type": "sleep",
      "message0": `${t("sleep")} %1 ${t("seconds")}`,
      "args0": [
        {
          "type": "input_value",
          "name": "time",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    }, {
      "type": "draw_circle",
      "message0": `${t("draw_circle")} %1 x %2 y %3 ${t("radius")} %4 ${t("color")} %5`,
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "radius",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "colour",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Draw Circle at (x;y) with radius",
      "helpUrl": ""
    },{
      "type" : "set_pixel",
      "message0" : `${t("set_pixel")} %1 x %2 y %3 ${t("color")} %4`,
      "args0" : [
        {
          "type" : "input_dummy"
        },
        {
          "type" : "input_value",
          "name" : "x",
          "check" : "Number"
        },
        {
          "type" : "input_value",
          "name" : "y",
          "check" : "Number"
        },
        {
          "type" : "input_value",
          "name" : "color",
        }
      ],
      "inputsInline" : true,
      "previousStatement" : null,
      "nextStatement" : null,
      "colour" : 230,
      "tooltip" : "",
      "helpUrl" : ""
    }]
  )
}

export default addCustomBlocks;