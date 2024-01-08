import { javascriptGenerator, Order } from 'blockly/javascript';

let runned = false

const addCodeGenerator = () => {

    if (runned) return
    runned = true

    javascriptGenerator.forBlock['resize_canvas'] = function (block: any) {
        var number_canvas_width = block.getFieldValue('canvas_width');
        var number_canvas_height = block.getFieldValue('canvas_height');
        // TODO: Assemble javascript into code variable.
        var code = `window.setCanvasSize(${number_canvas_width},${number_canvas_height})\n`;
        return code;
    };

    javascriptGenerator.forBlock['fill_canvas'] = function (block: any, generator: any) {
        var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
        var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
        var value_witdh = generator.valueToCode(block, 'witdh', Order.ATOMIC);
        var value_height = generator.valueToCode(block, 'height', Order.ATOMIC);
        var colour_name = block.getFieldValue('NAME');
        // TODO: Assemble javascript into code variable.
        var code = `window.fill(${value_x},${value_y},${value_witdh},${value_height},'${colour_name}')\n`;
        return code;
    };

    javascriptGenerator.forBlock['fill_canvas_colour'] = function (block: any, generator: any) {
        var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
        var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
        var value_witdh = generator.valueToCode(block, 'witdh', Order.ATOMIC);
        var value_height = generator.valueToCode(block, 'height', Order.ATOMIC);
        var colour_name = generator.valueToCode(block, 'colour', Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `window.fill(${value_x},${value_y},${value_witdh},${value_height},${colour_name})\n`;
        return code;
    };

    javascriptGenerator.forBlock['write_text_canvas'] = function (block: any, generator: any) {
        var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
        var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
        var value_text = generator.valueToCode(block, 'text', Order.ATOMIC);
        var value_text_size = generator.valueToCode(block, 'text_size', Order.ATOMIC);
        var colour_name = block.getFieldValue('NAME');
        // TODO: Assemble javascript into code variable.
        var code = `window.write(${value_x},${value_y},${value_text},${value_text_size},'${colour_name}')\n`;
        return code;
    };

    javascriptGenerator.forBlock['get_pixel_color_canvas'] = function (block: any, generator: any) {
        var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
        var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `window.getPixelColor(${value_x},${value_y})\n`;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Order.ADDITION];
    };

    javascriptGenerator.forBlock['print'] = function (block: any, generator: any) {
        var value_name = generator.valueToCode(block, 'msg', Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `window.addTerminalLine(${value_name})\n`;
        return code;
    };

    javascriptGenerator.forBlock['draw_line'] = function (block: any, generator: any) {
        var value_x1 = generator.valueToCode(block, 'x1', Order.ATOMIC);
        var value_y1 = generator.valueToCode(block, 'y1', Order.ATOMIC);
        var value_x2 = generator.valueToCode(block, 'x2', Order.ATOMIC);
        var value_y2 = generator.valueToCode(block, 'y2', Order.ATOMIC);
        var value_linewidth = generator.valueToCode(block, 'lineWidth', Order.ATOMIC);
        var value_colour = generator.valueToCode(block, 'colour', Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `window.drawLine(${value_x1},${value_y1},${value_x2},${value_y2},${value_linewidth},${value_colour})\n`;
        return code;
    };

    javascriptGenerator.forBlock['sleep'] = function (block:any, generator:any) {
        var value_time = generator.valueToCode(block, 'time', Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `await window.sleep(${value_time*1000})\n`;
        return code;
    };

}

export default addCodeGenerator;