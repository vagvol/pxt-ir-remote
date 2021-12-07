basic.forever(function() {
    serial.writeLine(IR.IR_read().toString());
})