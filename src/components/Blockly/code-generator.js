import { javascriptGenerator, Order } from 'blockly/javascript';

let runned = false

const addCodeGenerator = () => {

    if (runned) return
    runned = true

    javascriptGenerator.forBlock['resize_canvas'] = function (block, generator) {
        var number_canvas_width = block.getFieldValue('canvas_width');
        var number_canvas_height = block.getFieldValue('canvas_height');
        // TODO: Assemble javascript into code variable.
        var code = `setCanvasSize(${number_canvas_width},${number_canvas_height})\n`;
        return code;
    };

    javascriptGenerator.forBlock['fill_canvas'] = function (block, generator) {
        var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
        var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
        var value_witdh = generator.valueToCode(block, 'witdh', Order.ATOMIC);
        var value_height = generator.valueToCode(block, 'height', Order.ATOMIC);
        var colour_name = block.getFieldValue('NAME');
        // TODO: Assemble javascript into code variable.
        var code = `fill(${value_x},${value_y},${value_witdh},${value_height},'${colour_name}')\n`;
        return code;
    };

    javascriptGenerator.forBlock['fill_canvas_colour'] = function (block, generator) {
        var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
        var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
        var value_witdh = generator.valueToCode(block, 'witdh', Order.ATOMIC);
        var value_height = generator.valueToCode(block, 'height', Order.ATOMIC);
        var colour_name = generator.valueToCode(block, 'colour', Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `fill(${value_x},${value_y},${value_witdh},${value_height},${colour_name})\n`;
        return code;
    };

    javascriptGenerator.forBlock['write_text_canvas'] = function (block, generator) {
        var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
        var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
        var value_text = generator.valueToCode(block, 'text', Order.ATOMIC);
        var value_text_size = generator.valueToCode(block, 'text_size', Order.ATOMIC);
        var colour_name = block.getFieldValue('NAME');
        // TODO: Assemble javascript into code variable.
        var code = `write(${value_x},${value_y},${value_text},${value_text_size},'${colour_name}')\n`;
        return code;
    };

    javascriptGenerator.forBlock['get_pixel_color_canvas'] = function (block, generator) {
        var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
        var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `getPixelColor(${value_x},${value_y})\n`;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Order.ORDER_NONE];
    };

    javascriptGenerator.forBlock['print'] = function(block, generator) {
        var value_name = generator.valueToCode(block, 'msg', Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `window.addTerminalLine(${value_name})\n`;
        return code;
      };
}

export default addCodeGenerator;