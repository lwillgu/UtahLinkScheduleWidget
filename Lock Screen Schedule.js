// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: calendar-alt;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: rss-square;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: magic;




//URL
const dataUrl = "https://app.utahlink.ml/widget/widget.php?abbr=true";

//initialize widget setup
let widget = await createWidget();
Script.setWidget(widget);
widget.presentMedium();
Script.complete();


//function to create widget
async function createWidget() {
    const widget = new ListWidget();

    const data = await new Request(dataUrl).loadJSON();

    widget.addSpacer(5);
    let titleRow = widget.addText(` ${data.value}`);
    titleRow.font = Font.boldRoundedSystemFont(37);
    titleRow.textColor = Color.white();
    titleRow.centerAlignText();


    return widget;
}
