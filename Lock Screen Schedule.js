// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: calendar-alt;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: rss-square;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: magic;
const dataUrl = "https://app.utahlink.ml/widget/widget.php?abbr=true";

let widget = await createWidget();
Script.setWidget(widget);
widget.presentMedium();
Script.complete();

async function createWidget() {
    const widget = new ListWidget();

    const data = await new Request(dataUrl).loadJSON();

widget.addSpacer(5);
    let titleRow = widget.addText(` ${data.value}`);
    titleRow.font = Font.boldRoundedSystemFont(37);
    titleRow.textColor = Color.white();
    titleRow.centerAlignText();



//     let gradient = new LinearGradient()
    
//     gradient.colors = [new Color("3a8cc1"), // new Color("00A9D6")];
//     gradient.locations =  [0, 1];
    
//     widget.backgroundGradient = gradient

    return widget;
}