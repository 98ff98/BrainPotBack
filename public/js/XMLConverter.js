function XMLDownload() {
    var header = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
    var content = "";
    var date = new Date();

    toast("회의 내용을 스캔중입니다...");

    //content write
    content +=
        '<?mso-application progid="PowerPoint.Show"?>' +
        '<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">' +
        '<pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml" pkg:padding="512">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml" />' +
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail" Target="docProps/thumbnail.jpeg" />' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml" />' +
        '<Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slides/_rels/slide1.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slides/_rels/slide2.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout7.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slides/_rels/slide4.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout7.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/_rels/presentation.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml" pkg:padding="256">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps" Target="viewProps.xml" />' +
        '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide2.xml" />' +
        '<Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps" Target="presProps.xml" />' +
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide1.xml" />' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml" />' +
        '<Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide5.xml" />' +
        '<Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide4.xml" />' +
        '<Relationship Id="rId10" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableStyles" Target="tableStyles.xml" />' +
        '<Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide3.xml" />' +
        '<Relationship Id="rId9" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slides/_rels/slide5.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout7.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slides/_rels/slide3.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout7.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/presentation.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml">' +
        '<pkg:xmlData>' +
        '<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" saveSubsetFonts="1">' +
        '<p:sldMasterIdLst>' +
        '<p:sldMasterId id="2147483648" r:id="rId1" />' + '</p:sldMasterIdLst>' +
        '<p:sldIdLst>' +
        '<p:sldId id="256" r:id="rId2" />' +
        '<p:sldId id="257" r:id="rId3" />' +
        '<p:sldId id="258" r:id="rId4" />' +
        '<p:sldId id="259" r:id="rId5" />' +
        '<p:sldId id="260" r:id="rId6" />' + '</p:sldIdLst>' +
        '<p:sldSz cx="12192000" cy="6858000" />' +
        '<p:notesSz cx="6858000" cy="9144000" />' +
        '<p:defaultTextStyle>' +
        '<a:defPPr>' + '<a:defRPr lang="ko-KR" />' + '</a:defPPr>' +
        '<a:lvl1pPr marL="0" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl1pPr>' +
        '<a:lvl2pPr marL="457200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl2pPr>' +
        '<a:lvl3pPr marL="914400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl3pPr>' +
        '<a:lvl4pPr marL="1371600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl4pPr>' +
        '<a:lvl5pPr marL="1828800" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl5pPr>' +
        '<a:lvl6pPr marL="2286000" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl6pPr>' +
        '<a:lvl7pPr marL="2743200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl7pPr>' +
        '<a:lvl8pPr marL="3200400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl8pPr>' +
        '<a:lvl9pPr marL="3657600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl9pPr>' +
        '</p:defaultTextStyle>' +
        '<p:extLst>' +
        '<p:ext uri="{EFAFB233-063F-42B5-8137-9DF3F51BA10A}">' +
        '<p15:sldGuideLst xmlns:p15="http://schemas.microsoft.com/office/powerpoint/2012/main" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:presentation>' +
        '</pkg:xmlData>' +
        '</pkg:part>';

    //Content field
    var idIncrement = 1;
    //<code> page 1 </code>
    var page_1_content = "";

    if (Idea.list)
        Idea.list.forEach(function (item, index) {
            var x = getXMLLocation(item.left).x;
            var y = getXMLLocation(item.top).y;
            var width = getXMLLocation(item.width).x;
            var height = getXMLLocation(item.height).y;

            page_1_content += '<p:sp>' +
                '<p:nvSpPr>' +
                '<p:cNvPr id="' + ++idIncrement + '" name="TextBox ' + (idIncrement - 1) + '" />' +
                '<p:cNvSpPr txBox="1" />' +
                '<p:nvPr/></p:nvSpPr>' +
                '<p:spPr>' +
                '<a:xfrm><a:off x="' + x + '" y="' + y + '" /><a:ext cx="' + width + '" cy="' + height + '" /></a:xfrm>' +
                '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/></p:spPr>' +
                '<p:txBody>' +
                '<a:bodyPr wrap="none" rtlCol="0" anchor="ctr"><a:spAutoFit/></a:bodyPr><a:lstStyle/>' +
                '<a:p>' +
                '<a:r><a:rPr lang="ko-KR" altLang="en-US" sz="1400" dirty="0" err="1" smtClean="0" />' +
                '<a:t>' + item.text + '</a:t>' +
                '</a:r><a:endParaRPr lang="ko-KR" altLang="en-US" sz="1400" dirty="0" /></a:p>' +
                '</p:txBody>' +
                '</p:sp>';
        });
    //<code> page 1 </code>

    //<code> page 2 </code>
    var page_2_content = "";

    if (Grouping.list)
        Grouping.list.forEach(function (item, index) {

            if (item.isGroup) {
                var group = item.getObjects();
                var color = (item.category === "root") ? "FFDD33" : "33D3E5";
                var fontSize = (item.category === "root") ? 1400 : 1200;
                var x = getXMLLocation(item.left).x;
                var y = getXMLLocation(item.top).y;

                var mainBox = {
                    text: group[1].text,
                    x: x,
                    y: y,
                    width: getXMLLocation(group[0].width).x,
                    height: getXMLLocation(group[0].height).y
                };
                mainBox.y = (item.category === "root") ? mainBox.y - getXMLLocation(item.originalTop).y : y;
                var leftLine = {
                    x: x,
                    y: y,
                    width: getXMLLocation(group[2].width).x,
                    height: getXMLLocation(group[2].height).y
                };
                var rightLine = {
                    x: x + mainBox.width - getXMLLocation(1).x,
                    y: y,
                    width: getXMLLocation(group[3].width).x,
                    height: getXMLLocation(group[3].height).y
                };
                var bottomLine = {
                    x: x + getXMLLocation(1).x,
                    y: y + leftLine.height - getXMLLocation(2).y,
                    width: getXMLLocation(group[4].width).x,
                    height: getXMLLocation(group[4].height).y
                };

                page_2_content += '<p:grpSp>' +
                    '<p:nvGrpSpPr>' +
                    '<p:cNvPr id="' + ++idIncrement + '" name="그룹 ' + (idIncrement - 1) + '" />' +
                    '<p:cNvGrpSpPr/>' +
                    '<p:nvPr/></p:nvGrpSpPr>' +
                    '<p:grpSpPr>' +
                    '<a:xfrm><a:off x="' + mainBox.x + '" y="' + (mainBox.y - 1) + '" /><a:ext cx="' + (mainBox.width + 1) + '" cy="' + (leftLine.height + 1) + '" /><a:chOff x="' + mainBox.x + '" y="' + (mainBox.y - 1) + '" /><a:chExt cx="' + (mainBox.width + 1) + '" cy="' + (leftLine.height + 1) + '" /></a:xfrm>' +
                    '</p:grpSpPr>' +
                    '<p:sp>' +
                    '<p:nvSpPr>' +
                    '<p:cNvPr id="2" name="직사각형 1" />' +
                    '<p:cNvSpPr/>' +
                    '<p:nvPr/></p:nvSpPr>' +
                    '<p:spPr>' +
                    '<a:xfrm><a:off x="' + mainBox.x + '" y="' + mainBox.y + '" /><a:ext cx="' + mainBox.width + '" cy="' + mainBox.height + '" /></a:xfrm>' +
                    '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>' +
                    '<a:solidFill><a:srgbClr val="' + color + '" /></a:solidFill>' +
                    '<a:ln><a:noFill/></a:ln>' +
                    '</p:spPr>' +
                    '<p:style>' +
                    '<a:lnRef idx="2">' +
                    '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
                    '</a:lnRef>' +
                    '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
                    '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
                    '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
                    '</p:style>' +
                    '<p:txBody><a:bodyPr wrap="none" rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
                    '<a:p>' +
                    '<a:r>' +
                    '<a:rPr lang="ko-KR" altLang="en-US" sz="' + fontSize + '" dirty="0" smtClean="0">' +
                    '<a:solidFill><a:schemeClr val="tx1" /></a:solidFill>' +
                    '</a:rPr>' +
                    '<a:t>' + mainBox.text + '</a:t>' +
                    '</a:r>' +
                    '<a:endParaRPr lang="ko-KR" altLang="en-US" sz="' + fontSize + '" dirty="0">' +
                    '<a:solidFill><a:schemeClr val="tx1" /></a:solidFill>' +
                    '</a:endParaRPr>' +
                    '</a:p>' +
                    '</p:txBody>' +
                    '</p:sp>' +
                    '<p:sp>' +
                    '<p:nvSpPr>' +
                    '<p:cNvPr id="' + ++idIncrement + '" name="직사각형 ' + (idIncrement - 1) + '" />' +
                    '<p:cNvSpPr/>' +
                    '<p:nvPr/></p:nvSpPr>' +
                    '<p:spPr>' +
                    '<a:xfrm><a:off x="' + leftLine.x + '" y="' + leftLine.y + '" /><a:ext cx="' + leftLine.width + '" cy="' + leftLine.height + '" /></a:xfrm>' +
                    '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>' +
                    '<a:solidFill><a:srgbClr val="' + color + '" /></a:solidFill>' +
                    '<a:ln><a:noFill/></a:ln>' +
                    '</p:spPr>' +
                    '<p:style>' +
                    '<a:lnRef idx="2">' +
                    '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
                    '</a:lnRef>' +
                    '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
                    '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
                    '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
                    '</p:style>' +
                    '<p:txBody><a:bodyPr rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
                    '<a:p><a:pPr algn="ctr" /><a:endParaRPr lang="ko-KR" altLang="en-US" /></a:p>' +
                    '</p:txBody>' +
                    '</p:sp>' +
                    '<p:sp>' +
                    '<p:nvSpPr>' +
                    '<p:cNvPr id="' + ++idIncrement + '" name="직사각형 ' + (idIncrement - 1) + '" />' +
                    '<p:cNvSpPr/>' +
                    '<p:nvPr/></p:nvSpPr>' +
                    '<p:spPr>' +
                    '<a:xfrm><a:off x="' + rightLine.x + '" y="' + rightLine.y + '" /><a:ext cx="' + rightLine.width + '" cy="' + rightLine.height + '" /></a:xfrm>' +
                    '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>' +
                    '<a:solidFill><a:srgbClr val="' + color + '" /></a:solidFill>' +
                    '<a:ln><a:noFill/></a:ln>' +
                    '</p:spPr>' +
                    '<p:style>' +
                    '<a:lnRef idx="2">' +
                    '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
                    '</a:lnRef>' +
                    '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
                    '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
                    '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
                    '</p:style>' +
                    '<p:txBody><a:bodyPr rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
                    '<a:p><a:pPr algn="ctr" /><a:endParaRPr lang="ko-KR" altLang="en-US" /></a:p>' +
                    '</p:txBody>' +
                    '</p:sp>' +
                    '<p:sp>' +
                    '<p:nvSpPr>' +
                    '<p:cNvPr id="' + ++idIncrement + '" name="직사각형 ' + (idIncrement - 1) + '" />' +
                    '<p:cNvSpPr/>' +
                    '<p:nvPr/></p:nvSpPr>' +
                    '<p:spPr>' +
                    '<a:xfrm><a:off x="' + bottomLine.x + '" y="' + bottomLine.y + '" /><a:ext cx="' + bottomLine.width + '" cy="' + bottomLine.height + '" /></a:xfrm>' +
                    '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>' +
                    '<a:solidFill><a:srgbClr val="' + color + '" /></a:solidFill>' +
                    '<a:ln><a:noFill/></a:ln>' +
                    '</p:spPr>' +
                    '<p:style>' +
                    '<a:lnRef idx="2">' +
                    '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
                    '</a:lnRef>' +
                    '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
                    '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
                    '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
                    '</p:style>' +
                    '<p:txBody><a:bodyPr rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
                    '<a:p><a:pPr algn="ctr" /><a:endParaRPr lang="ko-KR" altLang="en-US" /></a:p>' +
                    '</p:txBody>' +
                    '</p:sp>' +
                    '</p:grpSp>';
            } else {
                var x = getXMLLocation(item.left).x;
                var y = getXMLLocation(item.top).y;
                var width = getXMLLocation(item.width).x;
                var height = getXMLLocation(item.height).y;

                page_2_content +=
                    '<p:sp>' +
                    '<p:nvSpPr>' +
                    '<p:cNvPr id="' + ++idIncrement + '" name="직사각형 ' + (idIncrement - 1) + '" />' +
                    '<p:cNvSpPr/>' +
                    '<p:nvPr/></p:nvSpPr>' +
                    '<p:spPr>' +
                    '<a:xfrm><a:off x="' + x + '" y="' + y + '" /><a:ext cx="' + width + '" cy="' + height + '" /></a:xfrm>' +
                    '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>' +
                    '<a:solidFill><a:srgbClr val="' + item.backgroundColor.substring(1) + '" /></a:solidFill>' +
                    '<a:ln><a:noFill/></a:ln>' +
                    '</p:spPr>' +
                    '<p:style>' +
                    '<a:lnRef idx="2">' +
                    '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
                    '</a:lnRef>' +
                    '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
                    '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
                    '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
                    '</p:style>' +
                    '<p:txBody><a:bodyPr wrap="none" rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
                    '<a:p><a:pPr algn="ctr" />' +
                    '<a:r>' +
                    '<a:rPr lang="ko-KR" altLang="en-US" sz="1100" dirty="0" smtClean="0">' +
                    '<a:solidFill><a:schemeClr val="tx1" /></a:solidFill>' +
                    '</a:rPr>' +
                    '<a:t>' + item.text + '</a:t>' +
                    '</a:r>' +
                    '<a:endParaRPr lang="ko-KR" altLang="en-US" sz="1100" dirty="0">' +
                    '<a:solidFill><a:schemeClr val="tx1" /></a:solidFill>' +
                    '</a:endParaRPr>' +
                    '</a:p>' +
                    '</p:txBody>' +
                    '</p:sp>';
            }
        });
    //<code> page 2 </code>

    //<code> page 3 </code>
    var page_3_content = "";

    if (level === 4) {
        $("#tab_3").removeClass("disabled");
        $("ul.tabs").tabs("select_tab", "brain_field_3");
    }

    for (var i = 0; i < $(".mean_list").length; i++) {
        var div = {
            x: getXMLLocation($($(".mean_list_item")[i]).offset().left - $("#brain_field_3").offset().left).x,
            y: getXMLLocation($($(".mean_list_item")[i]).offset().top - $("#brain_field_3").offset().top).y,
            width: getXMLLocation($($(".mean_list_item")[i]).width()).x,
            height: getXMLLocation($($(".mean_list_item")[i]).height()).y
        };
        var text = {
            text: $($(".mean_title")[i]).text(),
            x: getXMLLocation($($(".mean_title")[i]).offset().left - $("#brain_field_3").offset().left).x,
            y: getXMLLocation($($(".mean_title")[i]).offset().top - $("#brain_field_3").offset().top).y,
            width: getXMLLocation($($(".mean_title")[i]).width()).x,
            height: getXMLLocation($($(".mean_title")[i]).height()).y
        };
        var divider = {
            x: getXMLLocation($($(".mean_line")[i]).offset().left - $("#brain_field_3").offset().left).x,
            y: getXMLLocation($($(".mean_line")[i]).offset().top - $("#brain_field_3").offset().top).y,
            width: getXMLLocation($($(".mean_line")[i]).width()).x,
            height: getXMLLocation($($(".mean_line")[i]).height()).y
        };
        var inputField;

        page_3_content += '<p:grpSp>' +
            '<p:nvGrpSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="그룹 ' + (idIncrement - 1) + '" />' +
            '<p:cNvGrpSpPr/>' +
            '<p:nvPr/></p:nvGrpSpPr>' +
            '<p:grpSpPr>' +
            '<a:xfrm><a:off x="' + div.x + '" y="' + div.y + '" /><a:ext cx="' + div.width + '" cy="' + div.height + '" /><a:chOff x="' + div.x + '" y="' + div.y + '" /><a:chExt cx="' + div.width + '" cy="' + div.height + '" /></a:xfrm>' +
            '</p:grpSpPr>' +
            '<p:sp>' +
            '<p:nvSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="직사각형 ' + (idIncrement - 1) + '" />' +
            '<p:cNvSpPr/>' +
            '<p:nvPr/></p:nvSpPr>' +
            '<p:spPr>' +
            '<a:xfrm><a:off x="' + div.x + '" y="' + div.y + '" /><a:ext cx="' + div.width + '" cy="' + div.height + '" /></a:xfrm>' +
            '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>' +
            '<a:solidFill><a:schemeClr val="bg1" /></a:solidFill>' +
            '<a:ln>' +
            '<a:solidFill>' +
            '<a:schemeClr val="bg1"><a:lumMod val="95000" /></a:schemeClr>' +
            '</a:solidFill>' +
            '</a:ln>' +
            '</p:spPr>' +
            '<p:style>' +
            '<a:lnRef idx="2">' +
            '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
            '</a:lnRef>' +
            '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
            '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
            '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
            '</p:style>' +
            '<p:txBody><a:bodyPr rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
            '<a:p><a:pPr algn="ctr" /><a:endParaRPr lang="ko-KR" altLang="en-US" /></a:p>' +
            '</p:txBody>' +
            '</p:sp>' +
            '<p:sp>' +
            '<p:nvSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="TextBox ' + (idIncrement - 1) + '" />' +
            '<p:cNvSpPr txBox="1" />' +
            '<p:nvPr/></p:nvSpPr>' +
            '<p:spPr>' +
            '<a:xfrm><a:off x="' + text.x + '" y="' + text.y + '" /><a:ext cx="' + text.width + '" cy="' + text.height + '" /></a:xfrm>' +
            '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/></p:spPr>' +
            '<p:txBody>' +
            '<a:bodyPr wrap="square" rtlCol="0"><a:spAutoFit/></a:bodyPr><a:lstStyle/>' +
            '<a:p>' +
            '<a:r>' +
            '<a:rPr lang="en-US" altLang="ko-KR" sz="2000" dirty="0" smtClean="0">' +
            '<a:solidFill>' +
            '<a:schemeClr val="tx1"><a:lumMod val="85000" /><a:lumOff val="15000" /></a:schemeClr>' +
            '</a:solidFill>' +
            '</a:rPr>' +
            '<a:t>' + text.text + '</a:t>' +
            '</a:r>' +
            '<a:endParaRPr lang="ko-KR" altLang="en-US" sz="2000" dirty="0">' +
            '<a:solidFill>' +
            '<a:schemeClr val="tx1"><a:lumMod val="85000" /><a:lumOff val="15000" /></a:schemeClr>' +
            '</a:solidFill>' +
            '</a:endParaRPr>' +
            '</a:p>' +
            '</p:txBody>' +
            '</p:sp>' +
            '<p:cxnSp>' +
            '<p:nvCxnSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="직선 연결선 ' + (idIncrement - 1) + '" />' +
            '<p:cNvCxnSpPr/>' +
            '<p:nvPr/></p:nvCxnSpPr>' +
            '<p:spPr>' +
            '<a:xfrm flipV="1"><a:off x="' + divider.x + '" y="' + divider.y + '" /><a:ext cx="' + divider.width + '" cy="' + divider.height + '" /></a:xfrm>' +
            '<a:prstGeom prst="line"><a:avLst/></a:prstGeom>' +
            '<a:ln w="1270">' +
            '<a:solidFill>' +
            '<a:schemeClr val="bg1"><a:lumMod val="85000" /></a:schemeClr>' +
            '</a:solidFill>' +
            '</a:ln>' +
            '</p:spPr>' +
            '<p:style>' +
            '<a:lnRef idx="1"><a:schemeClr val="accent1" /></a:lnRef>' +
            '<a:fillRef idx="0"><a:schemeClr val="accent1" /></a:fillRef>' +
            '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
            '<a:fontRef idx="minor"><a:schemeClr val="tx1" /></a:fontRef>' +
            '</p:style>' +
            '</p:cxnSp>' +
            '</p:grpSp>';

        for (var j = 0; j < $($(".ideas")[i]).children().length; j++) {
            var item = $($(".ideas")[i]).children()[j];
            item = {
                text: $(item).text(),
                x: getXMLLocation($(item).offset().left - $("#brain_field_3").offset().left).x - ($(item).css("padding-left").split("px")[0] * 1),
                y: getXMLLocation($(item).offset().top - $("#brain_field_3").offset().top).y,
                width: getXMLLocation($(item).width() + ($(item).css("padding-left").split("px")[0] * 2)).x,
                height: getXMLLocation($(item).height()).y
            };

            page_3_content += '<p:sp>' +
                '<p:nvSpPr>' +
                '<p:cNvPr id="' + ++idIncrement + '" name="모서리가 둥근 직사각형 ' + (idIncrement - 1) + '" />' +
                '<p:cNvSpPr/>' +
                '<p:nvPr/></p:nvSpPr>' +
                '<p:spPr>' +
                '<a:xfrm><a:off x="' + item.x + '" y="' + item.y + '" /><a:ext cx="' + item.width + '" cy="' + item.height + '" /></a:xfrm>' +
                '<a:prstGeom prst="roundRect">' +
                '<a:avLst><a:gd name="adj" fmla="val 50000" /></a:avLst>' +
                '</a:prstGeom>' +
                '<a:solidFill><a:srgbClr val="6494B5" /></a:solidFill>' +
                '<a:ln><a:noFill/></a:ln>' +
                '</p:spPr>' +
                '<p:style>' +
                '<a:lnRef idx="2">' +
                '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
                '</a:lnRef>' +
                '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
                '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
                '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
                '</p:style>' +
                '<p:txBody><a:bodyPr wrap="none" rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
                '<a:p><a:pPr algn="ctr" />' +
                '<a:r><a:rPr lang="en-US" altLang="ko-KR" sz="900" dirty="0" smtClean="0" />' +
                '<a:t>' + item.text + '</a:t>' +
                '</a:r><a:endParaRPr lang="ko-KR" altLang="en-US" sz="1200" dirty="0" /></a:p>' +
                '</p:txBody>' +
                '</p:sp>';
        }

        for (var j = 0; j < $($(".comments")[i]).children().length; j++) {
            var item = $($(".comments")[i]).children()[j];
            item = {
                text: $(item).text(),
                x: getXMLLocation($(item).offset().left - $("#brain_field_3").offset().left).x - ($(item).css("padding-left").split("px")[0] * 1),
                y: getXMLLocation($(item).offset().top - $("#brain_field_3").offset().top).y,
                width: getXMLLocation($(item).width() + ($(item).css("padding-left").split("px")[0] * 2)).x,
                height: getXMLLocation($(item).height()).y
            };

            page_3_content += '<p:sp>' +
                '<p:nvSpPr>' +
                '<p:cNvPr id="' + ++idIncrement + '" name="모서리가 둥근 직사각형 ' + (idIncrement - 1) + '" />' +
                '<p:cNvSpPr/>' +
                '<p:nvPr/></p:nvSpPr>' +
                '<p:spPr>' +
                '<a:xfrm><a:off x="' + item.x + '" y="' + item.y + '" /><a:ext cx="' + item.width + '" cy="' + item.height + '" /></a:xfrm>' +
                '<a:prstGeom prst="roundRect">' +
                '<a:avLst><a:gd name="adj" fmla="val 50000" /></a:avLst>' +
                '</a:prstGeom>' +
                '<a:solidFill><a:srgbClr val="8064B5" /></a:solidFill>' +
                '<a:ln><a:noFill/></a:ln>' +
                '</p:spPr>' +
                '<p:style>' +
                '<a:lnRef idx="2">' +
                '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
                '</a:lnRef>' +
                '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
                '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
                '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
                '</p:style>' +
                '<p:txBody><a:bodyPr wrap="none" rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
                '<a:p><a:pPr algn="ctr" />' +
                '<a:r><a:rPr lang="en-US" altLang="ko-KR" sz="900" dirty="0" smtClean="0" />' +
                '<a:t>' + item.text + '</a:t>' +
                '</a:r><a:endParaRPr lang="ko-KR" altLang="en-US" sz="1200" dirty="0" /></a:p>' +
                '</p:txBody>' +
                '</p:sp>';
        }
    }

    if (level === 4) {
        $("ul.tabs").tabs("select_tab", "brain_field_4");
        $("#tab_3").addClass("disabled");
    }

    //<code> page 3 </code>

    //<code> page 4 </code>
    var page_4_content = "";
    var chart = "";
    var collaps = "";
    var chips = "";

    for (var i = 0; i < $(".vote_result_bar").length; i++) {
        var mainBar = {
            x: getXMLLocation($($(".vote_result_bar")[i]).offset().left - $("#brain_field_4").offset().left).x,
            y: getXMLLocation($($(".vote_result_bar")[i]).offset().top - $("#brain_field_4").offset().top).y,
            width: getXMLLocation($($(".vote_result_bar")[i]).width()).x,
            height: getXMLLocation($($(".vote_result_bar")[i]).height()).y
        };
        var subBar = {
            x: getXMLLocation($($(".rect")[i]).offset().left - $("#brain_field_4").offset().left).x,
            y: getXMLLocation($($(".rect")[i]).offset().top - $("#brain_field_4").offset().top).y,
            width: getXMLLocation($($(".rect")[i]).width()).x,
            height: getXMLLocation($($(".rect")[i]).height()).y
        };
        var text = {
            text: $($(".vote_result_text")[i]).text(),
            x: getXMLLocation($($(".vote_result_text")[i]).offset().left - $("#brain_field_4").offset().left).x - 10,
            y: getXMLLocation($($(".vote_result_text")[i]).offset().top - $("#brain_field_4").offset().top).y - 10,
            width: getXMLLocation($($(".vote_result_text")[i]).width()).x,
            height: getXMLLocation($($(".vote_result_text")[i]).height()).y
        }
        var color = "009688";
        var collapsHeader = {
            text: $($(".collaps-text")[i]).text(),
            x: getXMLLocation($($(".collapsible-header")[i]).offset().left - $("#brain_field_4").offset().left + 20).x,
            y: getXMLLocation($($(".collapsible-header")[i]).offset().top - $("#brain_field_4").offset().top).y,
            width: getXMLLocation($($(".collapsible-header")[i]).width()).x,
            height: getXMLLocation($($(".collapsible-header")[i]).height()).y
        };
        var collapsBody = {
            x: getXMLLocation($($(".collapsible-body")[i]).offset().left - $("#brain_field_4").offset().left + 20).x,
            y: getXMLLocation($($(".collapsible-body")[i]).offset().top - $("#brain_field_4").offset().top).y,
            width: getXMLLocation($($(".collapsible-body")[i]).width()).x,
            height: getXMLLocation($($(".collapsible-body")[i]).height() + 60).y
        }

        chart += '<p:grpSp>' +
            '<p:nvGrpSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="그룹 ' + (idIncrement - 1) + '" />' +
            '<p:cNvGrpSpPr/>' +
            '<p:nvPr/></p:nvGrpSpPr>' +
            '<p:grpSpPr>' +
            '<a:xfrm><a:off x="' + mainBar.x + '" y="' + mainBar.y + '" /><a:ext cx="9000000" cy="674817" /><a:chOff x="' + mainBar.x + '" y="' + mainBar.y + '" /><a:chExt cx="9000000" cy="674817" /></a:xfrm>' +
            '</p:grpSpPr>' +
            '<p:sp>' +
            '<p:nvSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="직사각형 ' + (idIncrement - 1) + '" />' +
            '<p:cNvSpPr/>' +
            '<p:nvPr/></p:nvSpPr>' +
            '<p:spPr>' +
            '<a:xfrm><a:off x="' + mainBar.x + '" y="' + mainBar.y + '" /><a:ext cx="' + mainBar.width + '" cy="' + mainBar.height + '" /></a:xfrm>' +
            '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>' +
            '<a:ln><a:noFill/></a:ln>' +
            '</p:spPr>' +
            '<p:style>' +
            '<a:lnRef idx="2">' +
            '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
            '</a:lnRef>' +
            '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
            '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
            '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
            '</p:style>' +
            '<p:txBody><a:bodyPr rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
            '<a:p><a:pPr algn="ctr" /><a:endParaRPr lang="ko-KR" altLang="en-US" /></a:p>' +
            '</p:txBody>' +
            '</p:sp>' +
            '<p:sp>' +
            '<p:nvSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="직사각형 ' + (idIncrement - 1) + '" />' +
            '<p:cNvSpPr/>' +
            '<p:nvPr/></p:nvSpPr>' +
            '<p:spPr>' +
            '<a:xfrm><a:off x="' + subBar.x + '" y="' + subBar.y + '" /><a:ext cx="' + subBar.width + '" cy="' + subBar.height + '" /></a:xfrm>' +
            '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>' +
            '<a:ln><a:noFill/></a:ln>' +
            '</p:spPr>' +
            '<p:style>' +
            '<a:lnRef idx="2">' +
            '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
            '</a:lnRef>' +
            '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
            '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
            '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
            '</p:style>' +
            '<p:txBody><a:bodyPr rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
            '<a:p><a:pPr algn="ctr" /><a:endParaRPr lang="ko-KR" altLang="en-US" /></a:p>' +
            '</p:txBody>' +
            '</p:sp>' +
            '<p:sp>' +
            '<p:nvSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="TextBox ' + (idIncrement - 1) + '" />' +
            '<p:cNvSpPr txBox="1" />' +
            '<p:nvPr/></p:nvSpPr>' +
            '<p:spPr>' +
            '<a:xfrm><a:off x="' + text.x + '" y="' + text.y + '" /><a:ext cx="' + text.width + '" cy="' + text.height + '" /></a:xfrm>' +
            '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/></p:spPr>' +
            '<p:txBody>' +
            '<a:bodyPr wrap="none" rtlCol="0"><a:spAutoFit/></a:bodyPr><a:lstStyle/>' +
            '<a:p>' +
            '<a:r><a:rPr lang="en-US" altLang="ko-KR" dirty="0" sz="900" smtClean="0" />' +
            '<a:t>' + text.text + '</a:t>' +
            '</a:r><a:endParaRPr lang="ko-KR" altLang="en-US" dirty="0" /></a:p>' +
            '</p:txBody>' +
            '</p:sp>' +
            '</p:grpSp>';

        collaps += '<p:grpSp>' +
            '<p:nvGrpSpPr>' +
            '<p:cNvPr id="' + idIncrement + '" name="그룹 ' + (idIncrement - 1) + '" />' +
            '<p:cNvGrpSpPr/>' +
            '<p:nvPr/></p:nvGrpSpPr>' +
            '<p:grpSpPr>' +
            '<a:xfrm><a:off x="' + collapsHeader.x + '" y="' + collapsHeader.y + '" /><a:ext cx="' + collapsHeader.width + '" cy="' + (collapsHeader.height + collapsBody.height) + '" /><a:chOff x="' + collapsHeader.x + '" y="' + collapsHeader.y + '" /><a:chExt cx="' + collapsHeader.width + '" cy="' + (collapsHeader.height + collapsBody.height) + '" /></a:xfrm>' +
            '</p:grpSpPr>' +
            '<p:sp>' +
            '<p:nvSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="직사각형 ' + (idIncrement - 1) + '" />' +
            '<p:cNvSpPr/>' +
            '<p:nvPr/></p:nvSpPr>' +
            '<p:spPr>' +
            '<a:xfrm><a:off x="' + collapsHeader.x + '" y="' + collapsHeader.y + '" /><a:ext cx="' + collapsHeader.width + '" cy="' + (collapsHeader.height + collapsBody.height) + '" /></a:xfrm>' +
            '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/>' +
            '<a:ln w="19050">' +
            '<a:solidFill>' +
            '<a:schemeClr val="bg1"><a:lumMod val="85000" /></a:schemeClr>' +
            '</a:solidFill>' +
            '</a:ln>' +
            '</p:spPr>' +
            '<p:style>' +
            '<a:lnRef idx="2">' +
            '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
            '</a:lnRef>' +
            '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
            '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
            '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
            '</p:style>' +
            '<p:txBody><a:bodyPr rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
            '<a:p><a:pPr algn="ctr" /><a:endParaRPr lang="ko-KR" altLang="en-US" dirty="0" /></a:p>' +
            '</p:txBody>' +
            '</p:sp>' +
            '<p:cxnSp>' +
            '<p:nvCxnSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="직선 연결선 ' + (idIncrement - 1) + '" />' +
            '<p:cNvCxnSpPr/>' +
            '<p:nvPr/></p:nvCxnSpPr>' +
            '<p:spPr>' +
            '<a:xfrm><a:off x="' + collapsHeader.x + '" y="' + collapsBody.y + '" /><a:ext cx="' + collapsHeader.width + '" cy="0" /></a:xfrm>' +
            '<a:prstGeom prst="line"><a:avLst/></a:prstGeom>' +
            '<a:ln w="19050">' +
            '<a:solidFill>' +
            '<a:schemeClr val="bg1"><a:lumMod val="85000" /></a:schemeClr>' +
            '</a:solidFill>' +
            '</a:ln>' +
            '</p:spPr>' +
            '<p:style>' +
            '<a:lnRef idx="1"><a:schemeClr val="accent1" /></a:lnRef>' +
            '<a:fillRef idx="0"><a:schemeClr val="accent1" /></a:fillRef>' +
            '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
            '<a:fontRef idx="minor"><a:schemeClr val="tx1" /></a:fontRef>' +
            '</p:style>' +
            '</p:cxnSp>' +
            '<p:sp>' +
            '<p:nvSpPr>' +
            '<p:cNvPr id="' + ++idIncrement + '" name="TextBox ' + (idIncrement - 1) + '" />' +
            '<p:cNvSpPr txBox="1" />' +
            '<p:nvPr/></p:nvSpPr>' +
            '<p:spPr>' +
            '<a:xfrm><a:off x="' + (collapsHeader.x + getXMLLocation(50).x) + '" y="' + collapsHeader.y + '" /><a:ext cx="' + collapsHeader.width + '" cy="' + collapsHeader.height + '" /></a:xfrm>' +
            '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/></p:spPr>' +
            '<p:txBody>' +
            '<a:bodyPr wrap="square" rtlCol="0"><a:spAutoFit/></a:bodyPr><a:lstStyle/>' +
            '<a:p>' +
            '<a:r><a:rPr lang="en-US" altLang="ko-KR" sz="1400" dirty="0" smtClean="0" />' +
            '<a:t>' + collapsHeader.text + '</a:t>' +
            '</a:r><a:endParaRPr lang="ko-KR" altLang="en-US" dirty="0" /></a:p>' +
            '</p:txBody>' +
            '</p:sp>' +
            '</p:grpSp>';

        for (var j = 0; j < $($($(".collapsible-body")[i]).children()).children().length; j++) {
            var item = $($($(".collapsible-body")[i]).children()).children()[j];
            var color = ($(item).hasClass("chip-idea")) ? "6494B5" : "8064B5";
            item = {
                text: $(item).text(),
                x: getXMLLocation($(item).offset().left - $("#brain_field_4").offset().left).x - ($(item).css("padding-left").split("px")[0] * 1),
                y: getXMLLocation($(item).offset().top - $("#brain_field_4").offset().top).y,
                width: getXMLLocation($(item).width() + ($(item).css("padding-left").split("px")[0] * 2)).x,
                height: getXMLLocation($(item).height()).y
            };

            page_4_content += '<p:sp>' +
                '<p:nvSpPr>' +
                '<p:cNvPr id="' + ++idIncrement + '" name="모서리가 둥근 직사각형 ' + (idIncrement - 1) + '" />' +
                '<p:cNvSpPr/>' +
                '<p:nvPr/></p:nvSpPr>' +
                '<p:spPr>' +
                '<a:xfrm><a:off x="' + item.x + '" y="' + item.y + '" /><a:ext cx="' + item.width + '" cy="' + item.height + '" /></a:xfrm>' +
                '<a:prstGeom prst="roundRect">' +
                '<a:avLst><a:gd name="adj" fmla="val 50000" /></a:avLst>' +
                '</a:prstGeom>' +
                '<a:solidFill><a:srgbClr val="' + color + '" /></a:solidFill>' +
                '<a:ln><a:noFill/></a:ln>' +
                '</p:spPr>' +
                '<p:style>' +
                '<a:lnRef idx="2">' +
                '<a:schemeClr val="accent1"><a:shade val="50000" /></a:schemeClr>' +
                '</a:lnRef>' +
                '<a:fillRef idx="1"><a:schemeClr val="accent1" /></a:fillRef>' +
                '<a:effectRef idx="0"><a:schemeClr val="accent1" /></a:effectRef>' +
                '<a:fontRef idx="minor"><a:schemeClr val="lt1" /></a:fontRef>' +
                '</p:style>' +
                '<p:txBody><a:bodyPr wrap="none" rtlCol="0" anchor="ctr" /><a:lstStyle/>' +
                '<a:p><a:pPr algn="ctr" />' +
                '<a:r><a:rPr lang="en-US" altLang="ko-KR" sz="900" dirty="0" smtClean="0" />' +
                '<a:t>' + item.text + '</a:t>' +
                '</a:r><a:endParaRPr lang="ko-KR" altLang="en-US" sz="1200" dirty="0" /></a:p>' +
                '</p:txBody>' +
                '</p:sp>';
        }
    }

    page_4_content += chart + collaps;
    //<code> page 4 </code>

    content +=
        '<pkg:part pkg:name="/ppt/slides/slide1.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml">' +
        '<pkg:xmlData>' +
        '<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">' +
        '<p:cSld>' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        page_1_content +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="3827103146" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sld>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slides/slide2.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml">' +
        '<pkg:xmlData>' +
        '<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">' +
        '<p:cSld>' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        page_2_content +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="3314084489" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sld>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slides/slide3.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml">' +
        '<pkg:xmlData>' +
        '<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">' +
        '<p:cSld>' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        page_3_content +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="3205469902" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sld>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slides/slide4.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml">' +
        '<pkg:xmlData>' +
        '<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">' +
        '<p:cSld>' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        page_4_content +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="2582569174" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sld>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slides/slide5.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml">' +
        '<pkg:xmlData>' +
        '<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">' +
        '<p:cSld>' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="3205469902" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sld>' +
        '</pkg:xmlData>' +
        '</pkg:part>';

    content +=
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout7.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout8.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout6.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideMasters/_rels/slideMaster1.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout8.xml" />' +
        '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout3.xml" />' +
        '<Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout7.xml" />' +
        '<Relationship Id="rId12" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml" />' +
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout2.xml" />' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml" />' +
        '<Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout6.xml" />' +
        '<Relationship Id="rId11" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout11.xml" />' +
        '<Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout5.xml" />' +
        '<Relationship Id="rId10" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout10.xml" />' +
        '<Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout4.xml" />' +
        '<Relationship Id="rId9" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout9.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout9.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout2.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout3.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout4.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout1.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout10.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout11.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout4.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="twoObj" preserve="1">' +
        '<p:cSld name="콘텐츠 2개">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="제목 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="title" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="내용 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph sz="half" idx="1" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="838200" y="1825625" />' + '<a:ext cx="5181600" cy="4351338" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="1" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>둘째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="2" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>셋째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="3" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>넷째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="4" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>다섯째 수준</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="내용 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph sz="half" idx="2" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="6172200" y="1825625" />' + '<a:ext cx="5181600" cy="4351338" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="1" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>둘째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="2" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>셋째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="3" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>넷째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="4" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>다섯째 수준</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="날짜 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="6" name="바닥글 개체 틀 5" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="7" name="슬라이드 번호 개체 틀 6" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="599290421" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout3.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="secHead" preserve="1">' +
        '<p:cSld name="구역 머리글">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="제목 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="title" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="831850" y="1709738" />' + '<a:ext cx="10515600" cy="2852737" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr anchor="b" />' +
        '<a:lstStyle>' +
        '<a:lvl1pPr>' + '<a:defRPr sz="6000" />' + '</a:lvl1pPr>' +
        '</a:lstStyle>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="텍스트 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="body" idx="1" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="831850" y="4589463" />' + '<a:ext cx="10515600" cy="1500187" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' +
        '<a:lstStyle>' +
        '<a:lvl1pPr marL="0" indent="0">' + '<a:buNone/>' +
        '<a:defRPr sz="2400">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl1pPr>' +
        '<a:lvl2pPr marL="457200" indent="0">' + '<a:buNone/>' +
        '<a:defRPr sz="2000">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl2pPr>' +
        '<a:lvl3pPr marL="914400" indent="0">' + '<a:buNone/>' +
        '<a:defRPr sz="1800">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl3pPr>' +
        '<a:lvl4pPr marL="1371600" indent="0">' + '<a:buNone/>' +
        '<a:defRPr sz="1600">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl4pPr>' +
        '<a:lvl5pPr marL="1828800" indent="0">' + '<a:buNone/>' +
        '<a:defRPr sz="1600">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl5pPr>' +
        '<a:lvl6pPr marL="2286000" indent="0">' + '<a:buNone/>' +
        '<a:defRPr sz="1600">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl6pPr>' +
        '<a:lvl7pPr marL="2743200" indent="0">' + '<a:buNone/>' +
        '<a:defRPr sz="1600">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl7pPr>' +
        '<a:lvl8pPr marL="3200400" indent="0">' + '<a:buNone/>' +
        '<a:defRPr sz="1600">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl8pPr>' +
        '<a:lvl9pPr marL="3657600" indent="0">' + '<a:buNone/>' +
        '<a:defRPr sz="1600">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl9pPr>' +
        '</a:lstStyle>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="날짜 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="바닥글 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="6" name="슬라이드 번호 개체 틀 5" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="3114510922" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout2.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="obj" preserve="1">' +
        '<p:cSld name="제목 및 내용">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="제목 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="title" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="내용 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph idx="1" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="1" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>둘째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="2" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>셋째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="3" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>넷째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="4" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>다섯째 수준</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="날짜 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="바닥글 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="6" name="슬라이드 번호 개체 틀 5" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="236164350" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout1.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="title" preserve="1">' +
        '<p:cSld name="제목 슬라이드">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="제목 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ctrTitle" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="1524000" y="1122363" />' + '<a:ext cx="9144000" cy="2387600" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr anchor="b" />' +
        '<a:lstStyle>' +
        '<a:lvl1pPr algn="ctr">' + '<a:defRPr sz="6000" />' + '</a:lvl1pPr>' +
        '</a:lstStyle>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="부제목 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="subTitle" idx="1" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="1524000" y="3602038" />' + '<a:ext cx="9144000" cy="1655762" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' +
        '<a:lstStyle>' +
        '<a:lvl1pPr marL="0" indent="0" algn="ctr">' + '<a:buNone/>' + '<a:defRPr sz="2400" />' + '</a:lvl1pPr>' +
        '<a:lvl2pPr marL="457200" indent="0" algn="ctr">' + '<a:buNone/>' + '<a:defRPr sz="2000" />' + '</a:lvl2pPr>' +
        '<a:lvl3pPr marL="914400" indent="0" algn="ctr">' + '<a:buNone/>' + '<a:defRPr sz="1800" />' + '</a:lvl3pPr>' +
        '<a:lvl4pPr marL="1371600" indent="0" algn="ctr">' + '<a:buNone/>' + '<a:defRPr sz="1600" />' + '</a:lvl4pPr>' +
        '<a:lvl5pPr marL="1828800" indent="0" algn="ctr">' + '<a:buNone/>' + '<a:defRPr sz="1600" />' + '</a:lvl5pPr>' +
        '<a:lvl6pPr marL="2286000" indent="0" algn="ctr">' + '<a:buNone/>' + '<a:defRPr sz="1600" />' + '</a:lvl6pPr>' +
        '<a:lvl7pPr marL="2743200" indent="0" algn="ctr">' + '<a:buNone/>' + '<a:defRPr sz="1600" />' + '</a:lvl7pPr>' +
        '<a:lvl8pPr marL="3200400" indent="0" algn="ctr">' + '<a:buNone/>' + '<a:defRPr sz="1600" />' + '</a:lvl8pPr>' +
        '<a:lvl9pPr marL="3657600" indent="0" algn="ctr">' + '<a:buNone/>' + '<a:defRPr sz="1600" />' + '</a:lvl9pPr>' +
        '</a:lstStyle>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>클릭하여 마스터 부제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="날짜 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="바닥글 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="6" name="슬라이드 번호 개체 틀 5" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1486370248" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideMasters/slideMaster1.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml">' +
        '<pkg:xmlData>' +
        '<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">' +
        '<p:cSld>' +
        '<p:bg>' +
        '<p:bgRef idx="1001">' + '<a:schemeClr val="bg1" />' + '</p:bgRef>' +
        '</p:bg>' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="제목 개체 틀 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="title" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="838200" y="365125" />' + '<a:ext cx="10515600" cy="1325563" />' + '</a:xfrm>' +
        '<a:prstGeom prst="rect">' + '<a:avLst/>' + '</a:prstGeom>' +
        '</p:spPr>' +
        '<p:txBody>' +
        '<a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="ctr">' + '<a:normAutofit/>' + '</a:bodyPr>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="텍스트 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="body" idx="1" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="838200" y="1825625" />' + '<a:ext cx="10515600" cy="4351338" />' + '</a:xfrm>' +
        '<a:prstGeom prst="rect">' + '<a:avLst/>' + '</a:prstGeom>' +
        '</p:spPr>' +
        '<p:txBody>' +
        '<a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0">' + '<a:normAutofit/>' + '</a:bodyPr>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="1" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>둘째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="2" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>셋째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="3" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>넷째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="4" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>다섯째 수준</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="날짜 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="2" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="838200" y="6356350" />' + '<a:ext cx="2743200" cy="365125" />' + '</a:xfrm>' +
        '<a:prstGeom prst="rect">' + '<a:avLst/>' + '</a:prstGeom>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="ctr" />' +
        '<a:lstStyle>' +
        '<a:lvl1pPr algn="l">' +
        '<a:defRPr sz="1200">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl1pPr>' +
        '</a:lstStyle>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="바닥글 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="3" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="4038600" y="6356350" />' + '<a:ext cx="4114800" cy="365125" />' + '</a:xfrm>' +
        '<a:prstGeom prst="rect">' + '<a:avLst/>' + '</a:prstGeom>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="ctr" />' +
        '<a:lstStyle>' +
        '<a:lvl1pPr algn="ctr">' +
        '<a:defRPr sz="1200">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl1pPr>' +
        '</a:lstStyle>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="6" name="슬라이드 번호 개체 틀 5" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="4" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="8610600" y="6356350" />' + '<a:ext cx="2743200" cy="365125" />' + '</a:xfrm>' +
        '<a:prstGeom prst="rect">' + '<a:avLst/>' + '</a:prstGeom>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="ctr" />' +
        '<a:lstStyle>' +
        '<a:lvl1pPr algn="r">' +
        '<a:defRPr sz="1200">' +
        '<a:solidFill>' +
        '<a:schemeClr val="tx1">' + '<a:tint val="75000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '</a:defRPr>' +
        '</a:lvl1pPr>' +
        '</a:lstStyle>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="791520973" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink" />' +
        '<p:sldLayoutIdLst>' +
        '<p:sldLayoutId id="2147483649" r:id="rId1" />' +
        '<p:sldLayoutId id="2147483650" r:id="rId2" />' +
        '<p:sldLayoutId id="2147483651" r:id="rId3" />' +
        '<p:sldLayoutId id="2147483652" r:id="rId4" />' +
        '<p:sldLayoutId id="2147483653" r:id="rId5" />' +
        '<p:sldLayoutId id="2147483654" r:id="rId6" />' +
        '<p:sldLayoutId id="2147483655" r:id="rId7" />' +
        '<p:sldLayoutId id="2147483656" r:id="rId8" />' +
        '<p:sldLayoutId id="2147483657" r:id="rId9" />' +
        '<p:sldLayoutId id="2147483658" r:id="rId10" />' +
        '<p:sldLayoutId id="2147483659" r:id="rId11" />' + '</p:sldLayoutIdLst>' +
        '<p:txStyles>' +
        '<p:titleStyle>' +
        '<a:lvl1pPr algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:lnSpc>' + '<a:spcPct val="90000" />' + '</a:lnSpc>' +
        '<a:spcBef>' + '<a:spcPct val="0" />' + '</a:spcBef>' + '<a:buNone/>' +
        '<a:defRPr sz="4400" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mj-lt" />' + '<a:ea typeface="+mj-ea" />' + '<a:cs typeface="+mj-cs" />' + '</a:defRPr>' +
        '</a:lvl1pPr>' +
        '</p:titleStyle>' +
        '<p:bodyStyle>' +
        '<a:lvl1pPr marL="228600" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:lnSpc>' + '<a:spcPct val="90000" />' + '</a:lnSpc>' +
        '<a:spcBef>' + '<a:spcPts val="1000" />' + '</a:spcBef>' + '<a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />' + '<a:buChar char="•" />' +
        '<a:defRPr sz="2800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl1pPr>' +
        '<a:lvl2pPr marL="685800" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:lnSpc>' + '<a:spcPct val="90000" />' + '</a:lnSpc>' +
        '<a:spcBef>' + '<a:spcPts val="500" />' + '</a:spcBef>' + '<a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />' + '<a:buChar char="•" />' +
        '<a:defRPr sz="2400" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl2pPr>' +
        '<a:lvl3pPr marL="1143000" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:lnSpc>' + '<a:spcPct val="90000" />' + '</a:lnSpc>' +
        '<a:spcBef>' + '<a:spcPts val="500" />' + '</a:spcBef>' + '<a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />' + '<a:buChar char="•" />' +
        '<a:defRPr sz="2000" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl3pPr>' +
        '<a:lvl4pPr marL="1600200" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:lnSpc>' + '<a:spcPct val="90000" />' + '</a:lnSpc>' +
        '<a:spcBef>' + '<a:spcPts val="500" />' + '</a:spcBef>' + '<a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />' + '<a:buChar char="•" />' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl4pPr>' +
        '<a:lvl5pPr marL="2057400" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:lnSpc>' + '<a:spcPct val="90000" />' + '</a:lnSpc>' +
        '<a:spcBef>' + '<a:spcPts val="500" />' + '</a:spcBef>' + '<a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />' + '<a:buChar char="•" />' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl5pPr>' +
        '<a:lvl6pPr marL="2514600" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:lnSpc>' + '<a:spcPct val="90000" />' + '</a:lnSpc>' +
        '<a:spcBef>' + '<a:spcPts val="500" />' + '</a:spcBef>' + '<a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />' + '<a:buChar char="•" />' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl6pPr>' +
        '<a:lvl7pPr marL="2971800" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:lnSpc>' + '<a:spcPct val="90000" />' + '</a:lnSpc>' +
        '<a:spcBef>' + '<a:spcPts val="500" />' + '</a:spcBef>' + '<a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />' + '<a:buChar char="•" />' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl7pPr>' +
        '<a:lvl8pPr marL="3429000" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:lnSpc>' + '<a:spcPct val="90000" />' + '</a:lnSpc>' +
        '<a:spcBef>' + '<a:spcPts val="500" />' + '</a:spcBef>' + '<a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />' + '<a:buChar char="•" />' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl8pPr>' +
        '<a:lvl9pPr marL="3886200" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:lnSpc>' + '<a:spcPct val="90000" />' + '</a:lnSpc>' +
        '<a:spcBef>' + '<a:spcPts val="500" />' + '</a:spcBef>' + '<a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />' + '<a:buChar char="•" />' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl9pPr>' +
        '</p:bodyStyle>' +
        '<p:otherStyle>' +
        '<a:defPPr>' + '<a:defRPr lang="ko-KR" />' + '</a:defPPr>' +
        '<a:lvl1pPr marL="0" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl1pPr>' +
        '<a:lvl2pPr marL="457200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl2pPr>' +
        '<a:lvl3pPr marL="914400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl3pPr>' +
        '<a:lvl4pPr marL="1371600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl4pPr>' +
        '<a:lvl5pPr marL="1828800" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl5pPr>' +
        '<a:lvl6pPr marL="2286000" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl6pPr>' +
        '<a:lvl7pPr marL="2743200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl7pPr>' +
        '<a:lvl8pPr marL="3200400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl8pPr>' +
        '<a:lvl9pPr marL="3657600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="1" hangingPunct="1">' +
        '<a:defRPr sz="1800" kern="1200">' +
        '<a:solidFill>' + '<a:schemeClr val="tx1" />' + '</a:solidFill>' + '<a:latin typeface="+mn-lt" />' + '<a:ea typeface="+mn-ea" />' + '<a:cs typeface="+mn-cs" />' + '</a:defRPr>' +
        '</a:lvl9pPr>' +
        '</p:otherStyle>' +
        '</p:txStyles>' +
        '</p:sldMaster>' +
        '</pkg:xmlData>' +
        '</pkg:part>';

    content +=
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout5.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="twoTxTwoObj" preserve="1">' +
        '<p:cSld name="비교">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="제목 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="title" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="839788" y="365125" />' + '<a:ext cx="10515600" cy="1325563" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="텍스트 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="body" idx="1" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="839788" y="1681163" />' + '<a:ext cx="5157787" cy="823912" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr anchor="b" />' +
        '<a:lstStyle>' +
        '<a:lvl1pPr marL="0" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2400" b="1" />' + '</a:lvl1pPr>' +
        '<a:lvl2pPr marL="457200" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2000" b="1" />' + '</a:lvl2pPr>' +
        '<a:lvl3pPr marL="914400" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1800" b="1" />' + '</a:lvl3pPr>' +
        '<a:lvl4pPr marL="1371600" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl4pPr>' +
        '<a:lvl5pPr marL="1828800" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl5pPr>' +
        '<a:lvl6pPr marL="2286000" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl6pPr>' +
        '<a:lvl7pPr marL="2743200" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl7pPr>' +
        '<a:lvl8pPr marL="3200400" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl8pPr>' +
        '<a:lvl9pPr marL="3657600" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl9pPr>' +
        '</a:lstStyle>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="내용 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph sz="half" idx="2" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="839788" y="2505075" />' + '<a:ext cx="5157787" cy="3684588" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="1" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>둘째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="2" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>셋째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="3" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>넷째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="4" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>다섯째 수준</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="텍스트 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="body" sz="quarter" idx="3" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="6172200" y="1681163" />' + '<a:ext cx="5183188" cy="823912" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr anchor="b" />' +
        '<a:lstStyle>' +
        '<a:lvl1pPr marL="0" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2400" b="1" />' + '</a:lvl1pPr>' +
        '<a:lvl2pPr marL="457200" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2000" b="1" />' + '</a:lvl2pPr>' +
        '<a:lvl3pPr marL="914400" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1800" b="1" />' + '</a:lvl3pPr>' +
        '<a:lvl4pPr marL="1371600" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl4pPr>' +
        '<a:lvl5pPr marL="1828800" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl5pPr>' +
        '<a:lvl6pPr marL="2286000" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl6pPr>' +
        '<a:lvl7pPr marL="2743200" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl7pPr>' +
        '<a:lvl8pPr marL="3200400" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl8pPr>' +
        '<a:lvl9pPr marL="3657600" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" b="1" />' + '</a:lvl9pPr>' +
        '</a:lstStyle>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="6" name="내용 개체 틀 5" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph sz="quarter" idx="4" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="6172200" y="2505075" />' + '<a:ext cx="5183188" cy="3684588" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="1" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>둘째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="2" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>셋째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="3" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>넷째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="4" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>다섯째 수준</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="7" name="날짜 개체 틀 6" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="8" name="바닥글 개체 틀 7" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="9" name="슬라이드 번호 개체 틀 8" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1178118013" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout6.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="titleOnly" preserve="1">' +
        '<p:cSld name="제목만">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="제목 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="title" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="날짜 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="바닥글 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="슬라이드 번호 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1618436273" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout7.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="blank" preserve="1">' +
        '<p:cSld name="빈 화면">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="날짜 개체 틀 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="바닥글 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="슬라이드 번호 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="682721921" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout11.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="vertTitleAndTx" preserve="1">' +
        '<p:cSld name="세로 제목 및 텍스트">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="세로 제목 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="title" orient="vert" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="8724900" y="365125" />' + '<a:ext cx="2628900" cy="5811838" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr vert="eaVert" />' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="세로 텍스트 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="body" orient="vert" idx="1" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="838200" y="365125" />' + '<a:ext cx="7734300" cy="5811838" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr vert="eaVert" />' + '<a:lstStyle/>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="1" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>둘째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="2" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>셋째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="3" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>넷째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="4" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>다섯째 수준</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="날짜 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="바닥글 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="6" name="슬라이드 번호 개체 틀 5" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="193777842" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout10.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="vertTx" preserve="1">' +
        '<p:cSld name="제목 및 세로 텍스트">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="제목 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="title" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="세로 텍스트 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="body" orient="vert" idx="1" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr vert="eaVert" />' + '<a:lstStyle/>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="1" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>둘째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="2" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>셋째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="3" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>넷째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="4" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>다섯째 수준</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="날짜 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="바닥글 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="6" name="슬라이드 번호 개체 틀 5" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="2794256627" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout9.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="picTx" preserve="1">' +
        '<p:cSld name="캡션 있는 그림">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="제목 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="title" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="839788" y="457200" />' + '<a:ext cx="3932237" cy="1600200" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr anchor="b" />' +
        '<a:lstStyle>' +
        '<a:lvl1pPr>' + '<a:defRPr sz="3200" />' + '</a:lvl1pPr>' +
        '</a:lstStyle>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="그림 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="pic" idx="1" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="5183188" y="987425" />' + '<a:ext cx="6172200" cy="4873625" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' +
        '<a:lstStyle>' +
        '<a:lvl1pPr marL="0" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="3200" />' + '</a:lvl1pPr>' +
        '<a:lvl2pPr marL="457200" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2800" />' + '</a:lvl2pPr>' +
        '<a:lvl3pPr marL="914400" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2400" />' + '</a:lvl3pPr>' +
        '<a:lvl4pPr marL="1371600" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2000" />' + '</a:lvl4pPr>' +
        '<a:lvl5pPr marL="1828800" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2000" />' + '</a:lvl5pPr>' +
        '<a:lvl6pPr marL="2286000" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2000" />' + '</a:lvl6pPr>' +
        '<a:lvl7pPr marL="2743200" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2000" />' + '</a:lvl7pPr>' +
        '<a:lvl8pPr marL="3200400" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2000" />' + '</a:lvl8pPr>' +
        '<a:lvl9pPr marL="3657600" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="2000" />' + '</a:lvl9pPr>' +
        '</a:lstStyle>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="텍스트 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="body" sz="half" idx="2" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="839788" y="2057400" />' + '<a:ext cx="3932237" cy="3811588" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' +
        '<a:lstStyle>' +
        '<a:lvl1pPr marL="0" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" />' + '</a:lvl1pPr>' +
        '<a:lvl2pPr marL="457200" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1400" />' + '</a:lvl2pPr>' +
        '<a:lvl3pPr marL="914400" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1200" />' + '</a:lvl3pPr>' +
        '<a:lvl4pPr marL="1371600" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl4pPr>' +
        '<a:lvl5pPr marL="1828800" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl5pPr>' +
        '<a:lvl6pPr marL="2286000" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl6pPr>' +
        '<a:lvl7pPr marL="2743200" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl7pPr>' +
        '<a:lvl8pPr marL="3200400" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl8pPr>' +
        '<a:lvl9pPr marL="3657600" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl9pPr>' +
        '</a:lstStyle>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="날짜 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="6" name="바닥글 개체 틀 5" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="7" name="슬라이드 번호 개체 틀 6" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1795091102" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/slideLayout8.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">' +
        '<pkg:xmlData>' +
        '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="objTx" preserve="1">' +
        '<p:cSld name="캡션 있는 콘텐츠">' +
        '<p:spTree>' +
        '<p:nvGrpSpPr>' +
        '<p:cNvPr id="1" name="" />' +
        '<p:cNvGrpSpPr/>' +
        '<p:nvPr/>' + '</p:nvGrpSpPr>' +
        '<p:grpSpPr>' +
        '<a:xfrm>' + '<a:off x="0" y="0" />' + '<a:ext cx="0" cy="0" />' + '<a:chOff x="0" y="0" />' + '<a:chExt cx="0" cy="0" />' + '</a:xfrm>' +
        '</p:grpSpPr>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="2" name="제목 1" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="title" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="839788" y="457200" />' + '<a:ext cx="3932237" cy="1600200" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr anchor="b" />' +
        '<a:lstStyle>' +
        '<a:lvl1pPr>' + '<a:defRPr sz="3200" />' + '</a:lvl1pPr>' +
        '</a:lstStyle>' +
        '<a:p>' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 제목 스타일 편집</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="3" name="내용 개체 틀 2" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph idx="1" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="5183188" y="987425" />' + '<a:ext cx="6172200" cy="4873625" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' +
        '<a:lstStyle>' +
        '<a:lvl1pPr>' + '<a:defRPr sz="3200" />' + '</a:lvl1pPr>' +
        '<a:lvl2pPr>' + '<a:defRPr sz="2800" />' + '</a:lvl2pPr>' +
        '<a:lvl3pPr>' + '<a:defRPr sz="2400" />' + '</a:lvl3pPr>' +
        '<a:lvl4pPr>' + '<a:defRPr sz="2000" />' + '</a:lvl4pPr>' +
        '<a:lvl5pPr>' + '<a:defRPr sz="2000" />' + '</a:lvl5pPr>' +
        '<a:lvl6pPr>' + '<a:defRPr sz="2000" />' + '</a:lvl6pPr>' +
        '<a:lvl7pPr>' + '<a:defRPr sz="2000" />' + '</a:lvl7pPr>' +
        '<a:lvl8pPr>' + '<a:defRPr sz="2000" />' + '</a:lvl8pPr>' +
        '<a:lvl9pPr>' + '<a:defRPr sz="2000" />' + '</a:lvl9pPr>' +
        '</a:lstStyle>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="1" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>둘째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="2" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>셋째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="3" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>넷째 수준</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '<a:p>' + '<a:pPr lvl="4" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>다섯째 수준</a:t>' +
        '</a:r>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="4" name="텍스트 개체 틀 3" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="body" sz="half" idx="2" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr>' +
        '<a:xfrm>' + '<a:off x="839788" y="2057400" />' + '<a:ext cx="3932237" cy="3811588" />' + '</a:xfrm>' +
        '</p:spPr>' +
        '<p:txBody>' + '<a:bodyPr/>' +
        '<a:lstStyle>' +
        '<a:lvl1pPr marL="0" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1600" />' + '</a:lvl1pPr>' +
        '<a:lvl2pPr marL="457200" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1400" />' + '</a:lvl2pPr>' +
        '<a:lvl3pPr marL="914400" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1200" />' + '</a:lvl3pPr>' +
        '<a:lvl4pPr marL="1371600" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl4pPr>' +
        '<a:lvl5pPr marL="1828800" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl5pPr>' +
        '<a:lvl6pPr marL="2286000" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl6pPr>' +
        '<a:lvl7pPr marL="2743200" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl7pPr>' +
        '<a:lvl8pPr marL="3200400" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl8pPr>' +
        '<a:lvl9pPr marL="3657600" indent="0">' + '<a:buNone/>' + '<a:defRPr sz="1000" />' + '</a:lvl9pPr>' +
        '</a:lstStyle>' +
        '<a:p>' + '<a:pPr lvl="0" />' +
        '<a:r>' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>마스터 텍스트 스타일 편집</a:t>' +
        '</a:r>' +
        '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="5" name="날짜 개체 틀 4" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="dt" sz="half" idx="10" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{5CC02146-C256-4E9A-AFC7-D19F8EF7B201}" type="datetimeFigureOut">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>2017-08-25</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="6" name="바닥글 개체 틀 5" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="ftr" sz="quarter" idx="11" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '<p:sp>' +
        '<p:nvSpPr>' +
        '<p:cNvPr id="7" name="슬라이드 번호 개체 틀 6" />' +
        '<p:cNvSpPr>' + '<a:spLocks noGrp="1" />' + '</p:cNvSpPr>' +
        '<p:nvPr>' +
        '<p:ph type="sldNum" sz="quarter" idx="12" />' + '</p:nvPr>' +
        '</p:nvSpPr>' +
        '<p:spPr/>' +
        '<p:txBody>' + '<a:bodyPr/>' + '<a:lstStyle/>' +
        '<a:p>' +
        '<a:fld id="{2604CA2D-3E71-4581-A128-B1AE281A5664}" type="slidenum">' + '<a:rPr lang="ko-KR" altLang="en-US" smtClean="0" />' +
        '<a:t>‹#›</a:t>' +
        '</a:fld>' + '<a:endParaRPr lang="ko-KR" altLang="en-US" />' + '</a:p>' +
        '</p:txBody>' +
        '</p:sp>' +
        '</p:spTree>' +
        '<p:extLst>' +
        '<p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">' +
        '<p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1649285506" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:cSld>' +
        '<p:clrMapOvr>' + '<a:masterClrMapping/>' + '</p:clrMapOvr>' +
        '</p:sldLayout>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout5.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />' +
        '</Relationships>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/theme/theme1.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.theme+xml">' +
        '<pkg:xmlData>' +
        '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office 테마">' +
        '<a:themeElements>' +
        '<a:clrScheme name="Office">' +
        '<a:dk1>' + '<a:sysClr val="windowText" lastClr="000000" />' + '</a:dk1>' +
        '<a:lt1>' + '<a:sysClr val="window" lastClr="FFFFFF" />' + '</a:lt1>' +
        '<a:dk2>' + '<a:srgbClr val="44546A" />' + '</a:dk2>' +
        '<a:lt2>' + '<a:srgbClr val="E7E6E6" />' + '</a:lt2>' +
        '<a:accent1>' + '<a:srgbClr val="5B9BD5" />' + '</a:accent1>' +
        '<a:accent2>' + '<a:srgbClr val="ED7D31" />' + '</a:accent2>' +
        '<a:accent3>' + '<a:srgbClr val="A5A5A5" />' + '</a:accent3>' +
        '<a:accent4>' + '<a:srgbClr val="FFC000" />' + '</a:accent4>' +
        '<a:accent5>' + '<a:srgbClr val="4472C4" />' + '</a:accent5>' +
        '<a:accent6>' + '<a:srgbClr val="70AD47" />' + '</a:accent6>' +
        '<a:hlink>' + '<a:srgbClr val="0563C1" />' + '</a:hlink>' +
        '<a:folHlink>' + '<a:srgbClr val="954F72" />' + '</a:folHlink>' +
        '</a:clrScheme>' +
        '<a:fontScheme name="Office">' +
        '<a:majorFont>' + '<a:latin typeface="맑은 고딕" panose="020F0302020204030204" />' + '<a:ea typeface="" />' + '<a:cs typeface="" />' + '<a:font script="Jpan" typeface="游ゴシック Light" />' + '<a:font script="Hang" typeface="맑은 고딕" />' + '<a:font script="Hans" typeface="等线 Light" />' + '<a:font script="Hant" typeface="新細明體" />' + '<a:font script="Arab" typeface="Times New Roman" />' + '<a:font script="Hebr" typeface="Times New Roman" />' + '<a:font script="Thai" typeface="Angsana New" />' + '<a:font script="Ethi" typeface="Nyala" />' + '<a:font script="Beng" typeface="Vrinda" />' + '<a:font script="Gujr" typeface="Shruti" />' + '<a:font script="Khmr" typeface="MoolBoran" />' + '<a:font script="Knda" typeface="Tunga" />' + '<a:font script="Guru" typeface="Raavi" />' + '<a:font script="Cans" typeface="Euphemia" />' + '<a:font script="Cher" typeface="Plantagenet Cherokee" />' + '<a:font script="Yiii" typeface="Microsoft Yi Baiti" />' + '<a:font script="Tibt" typeface="Microsoft Himalaya" />' + '<a:font script="Thaa" typeface="MV Boli" />' + '<a:font script="Deva" typeface="Mangal" />' + '<a:font script="Telu" typeface="Gautami" />' + '<a:font script="Taml" typeface="Latha" />' + '<a:font script="Syrc" typeface="Estrangelo Edessa" />' + '<a:font script="Orya" typeface="Kalinga" />' + '<a:font script="Mlym" typeface="Kartika" />' + '<a:font script="Laoo" typeface="DokChampa" />' + '<a:font script="Sinh" typeface="Iskoola Pota" />' + '<a:font script="Mong" typeface="Mongolian Baiti" />' + '<a:font script="Viet" typeface="Times New Roman" />' + '<a:font script="Uigh" typeface="Microsoft Uighur" />' + '<a:font script="Geor" typeface="Sylfaen" />' + '</a:majorFont>' +
        '<a:minorFont>' + '<a:latin typeface="맑은 고딕" panose="020F0502020204030204" />' + '<a:ea typeface="" />' + '<a:cs typeface="" />' + '<a:font script="Jpan" typeface="游ゴシック" />' + '<a:font script="Hang" typeface="맑은 고딕" />' + '<a:font script="Hans" typeface="等线" />' + '<a:font script="Hant" typeface="新細明體" />' + '<a:font script="Arab" typeface="Arial" />' + '<a:font script="Hebr" typeface="Arial" />' + '<a:font script="Thai" typeface="Cordia New" />' + '<a:font script="Ethi" typeface="Nyala" />' + '<a:font script="Beng" typeface="Vrinda" />' + '<a:font script="Gujr" typeface="Shruti" />' + '<a:font script="Khmr" typeface="DaunPenh" />' + '<a:font script="Knda" typeface="Tunga" />' + '<a:font script="Guru" typeface="Raavi" />' + '<a:font script="Cans" typeface="Euphemia" />' + '<a:font script="Cher" typeface="Plantagenet Cherokee" />' + '<a:font script="Yiii" typeface="Microsoft Yi Baiti" />' + '<a:font script="Tibt" typeface="Microsoft Himalaya" />' + '<a:font script="Thaa" typeface="MV Boli" />' + '<a:font script="Deva" typeface="Mangal" />' + '<a:font script="Telu" typeface="Gautami" />' + '<a:font script="Taml" typeface="Latha" />' + '<a:font script="Syrc" typeface="Estrangelo Edessa" />' + '<a:font script="Orya" typeface="Kalinga" />' + '<a:font script="Mlym" typeface="Kartika" />' + '<a:font script="Laoo" typeface="DokChampa" />' + '<a:font script="Sinh" typeface="Iskoola Pota" />' + '<a:font script="Mong" typeface="Mongolian Baiti" />' + '<a:font script="Viet" typeface="Arial" />' + '<a:font script="Uigh" typeface="Microsoft Uighur" />' + '<a:font script="Geor" typeface="Sylfaen" />' + '</a:minorFont>' +
        '</a:fontScheme>' +
        '<a:fmtScheme name="Office">' +
        '<a:fillStyleLst>' +
        '<a:solidFill>' + '<a:schemeClr val="phClr" />' + '</a:solidFill>' +
        '<a:gradFill rotWithShape="1">' +
        '<a:gsLst>' +
        '<a:gs pos="0">' +
        '<a:schemeClr val="phClr">' + '<a:lumMod val="110000" />' + '<a:satMod val="105000" />' + '<a:tint val="67000" />' + '</a:schemeClr>' +
        '</a:gs>' +
        '<a:gs pos="50000">' +
        '<a:schemeClr val="phClr">' + '<a:lumMod val="105000" />' + '<a:satMod val="103000" />' + '<a:tint val="73000" />' + '</a:schemeClr>' +
        '</a:gs>' +
        '<a:gs pos="100000">' +
        '<a:schemeClr val="phClr">' + '<a:lumMod val="105000" />' + '<a:satMod val="109000" />' + '<a:tint val="81000" />' + '</a:schemeClr>' +
        '</a:gs>' +
        '</a:gsLst>' + '<a:lin ang="5400000" scaled="0" />' + '</a:gradFill>' +
        '<a:gradFill rotWithShape="1">' +
        '<a:gsLst>' +
        '<a:gs pos="0">' +
        '<a:schemeClr val="phClr">' + '<a:satMod val="103000" />' + '<a:lumMod val="102000" />' + '<a:tint val="94000" />' + '</a:schemeClr>' +
        '</a:gs>' +
        '<a:gs pos="50000">' +
        '<a:schemeClr val="phClr">' + '<a:satMod val="110000" />' + '<a:lumMod val="100000" />' + '<a:shade val="100000" />' + '</a:schemeClr>' +
        '</a:gs>' +
        '<a:gs pos="100000">' +
        '<a:schemeClr val="phClr">' + '<a:lumMod val="99000" />' + '<a:satMod val="120000" />' + '<a:shade val="78000" />' + '</a:schemeClr>' +
        '</a:gs>' +
        '</a:gsLst>' + '<a:lin ang="5400000" scaled="0" />' + '</a:gradFill>' +
        '</a:fillStyleLst>' +
        '<a:lnStyleLst>' +
        '<a:ln w="6350" cap="flat" cmpd="sng" algn="ctr">' +
        '<a:solidFill>' + '<a:schemeClr val="phClr" />' + '</a:solidFill>' + '<a:prstDash val="solid" />' + '<a:miter lim="800000" />' + '</a:ln>' +
        '<a:ln w="12700" cap="flat" cmpd="sng" algn="ctr">' +
        '<a:solidFill>' + '<a:schemeClr val="phClr" />' + '</a:solidFill>' + '<a:prstDash val="solid" />' + '<a:miter lim="800000" />' + '</a:ln>' +
        '<a:ln w="19050" cap="flat" cmpd="sng" algn="ctr">' +
        '<a:solidFill>' + '<a:schemeClr val="phClr" />' + '</a:solidFill>' + '<a:prstDash val="solid" />' + '<a:miter lim="800000" />' + '</a:ln>' +
        '</a:lnStyleLst>' +
        '<a:effectStyleLst>' +
        '<a:effectStyle>' + '<a:effectLst/>' + '</a:effectStyle>' +
        '<a:effectStyle>' + '<a:effectLst/>' + '</a:effectStyle>' +
        '<a:effectStyle>' +
        '<a:effectLst>' +
        '<a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0">' +
        '<a:srgbClr val="000000">' + '<a:alpha val="63000" />' + '</a:srgbClr>' +
        '</a:outerShdw>' +
        '</a:effectLst>' +
        '</a:effectStyle>' +
        '</a:effectStyleLst>' +
        '<a:bgFillStyleLst>' +
        '<a:solidFill>' + '<a:schemeClr val="phClr" />' + '</a:solidFill>' +
        '<a:solidFill>' +
        '<a:schemeClr val="phClr">' + '<a:tint val="95000" />' + '<a:satMod val="170000" />' + '</a:schemeClr>' +
        '</a:solidFill>' +
        '<a:gradFill rotWithShape="1">' +
        '<a:gsLst>' +
        '<a:gs pos="0">' +
        '<a:schemeClr val="phClr">' + '<a:tint val="93000" />' + '<a:satMod val="150000" />' + '<a:shade val="98000" />' + '<a:lumMod val="102000" />' + '</a:schemeClr>' +
        '</a:gs>' +
        '<a:gs pos="50000">' +
        '<a:schemeClr val="phClr">' + '<a:tint val="98000" />' + '<a:satMod val="130000" />' + '<a:shade val="90000" />' + '<a:lumMod val="103000" />' + '</a:schemeClr>' +
        '</a:gs>' +
        '<a:gs pos="100000">' +
        '<a:schemeClr val="phClr">' + '<a:shade val="63000" />' + '<a:satMod val="120000" />' + '</a:schemeClr>' +
        '</a:gs>' +
        '</a:gsLst>' + '<a:lin ang="5400000" scaled="0" />' + '</a:gradFill>' +
        '</a:bgFillStyleLst>' +
        '</a:fmtScheme>' +
        '</a:themeElements>' + '<a:objectDefaults/>' + '<a:extraClrSchemeLst/>' +
        '<a:extLst>' +
        '<a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}">' +
        '<thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}" />' +
        '</a:ext>' +
        '</a:extLst>' +
        '</a:theme>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/docProps/thumbnail.jpeg" pkg:contentType="image/jpeg" pkg:compression="store">' +
        '<pkg:binaryData>' + '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsK CwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQU FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACQAQADASIA AhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQA AAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3 ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWm p6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEA AwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSEx BhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElK U1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3 uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9DfEi +O5viNEultcQ+FTYSRyOotSBcFG2uAx8wgEoe3Ibgg1zmk/8Le8QaXp2oajp9noGptqDG60qS/DR JAEjCFWhDnBKyZBdsFzwRjb7TRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABR RRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFF FABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUU AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABR RRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFF FABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUU AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABR RRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==' +
        '</pkg:binaryData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/presProps.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.presProps+xml">' +
        '<pkg:xmlData>' +
        '<p:presentationPr xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">' +
        '<p:extLst>' +
        '<p:ext uri="{E76CE94A-603C-4142-B9EB-6D1370010A27}">' +
        '<p14:discardImageEditData xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="0" />' +
        '</p:ext>' +
        '<p:ext uri="{D31A062A-798A-4329-ABDD-BBA856620510}">' +
        '<p14:defaultImageDpi xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="220" />' +
        '</p:ext>' +
        '<p:ext uri="{FD5EFAAD-0ECE-453E-9831-46B23BE46B34}">' +
        '<p15:chartTrackingRefBased xmlns:p15="http://schemas.microsoft.com/office/powerpoint/2012/main" val="1" />' +
        '</p:ext>' +
        '</p:extLst>' +
        '</p:presentationPr>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/tableStyles.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml">' +
        '<pkg:xmlData>' + '<a:tblStyleLst xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" def="{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}" />' + '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/ppt/viewProps.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml">' +
        '<pkg:xmlData>' +
        '<p:viewPr xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">' +
        '<p:normalViewPr horzBarState="maximized">' +
        '<p:restoredLeft sz="15987" autoAdjust="0" />' +
        '<p:restoredTop sz="94660" />' + '</p:normalViewPr>' +
        '<p:slideViewPr>' +
        '<p:cSldViewPr snapToGrid="0">' +
        '<p:cViewPr varScale="1">' +
        '<p:scale>' + '<a:sx n="78" d="100" />' + '<a:sy n="78" d="100" />' + '</p:scale>' +
        '<p:origin x="174" y="72" />' + '</p:cViewPr>' +
        '<p:guideLst/>' + '</p:cSldViewPr>' +
        '</p:slideViewPr>' +
        '<p:notesTextViewPr>' +
        '<p:cViewPr>' +
        '<p:scale>' + '<a:sx n="1" d="1" />' + '<a:sy n="1" d="1" />' + '</p:scale>' +
        '<p:origin x="0" y="0" />' + '</p:cViewPr>' +
        '</p:notesTextViewPr>' +
        '<p:gridSpacing cx="72008" cy="72008" />' + '</p:viewPr>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/docProps/core.xml" pkg:contentType="application/vnd.openxmlformats-package.core-properties+xml" pkg:padding="256">' +
        '<pkg:xmlData>' +
        '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
        '<dc:title>PowerPoint 프레젠테이션</dc:title>' +
        '<dc:creator>BrainPot</dc:creator>' +
        '<cp:lastModifiedBy>BrainPot</cp:lastModifiedBy>' +
        '<cp:revision>6</cp:revision>' +
        '<dcterms:created xsi:type="dcterms:W3CDTF">2017-07-11T05:56:47Z</dcterms:created>' +
        '<dcterms:modified xsi:type="dcterms:W3CDTF">2017-08-24T18:38:56Z</dcterms:modified>' +
        '</cp:coreProperties>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/docProps/app.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" pkg:padding="256">' +
        '<pkg:xmlData>' +
        '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">' +
        '<TotalTime>1</TotalTime>' +
        '<Words>3</Words>' +
        '<Application>Microsoft Office PowerPoint</Application>' +
        '<PresentationFormat>와이드스크린</PresentationFormat>' +
        '<Paragraphs>3</Paragraphs>' +
        '<Slides>5</Slides>' +
        '<Notes>0</Notes>' +
        '<HiddenSlides>0</HiddenSlides>' +
        '<MMClips>0</MMClips>' +
        '<ScaleCrop></ScaleCrop>' +
        '<HeadingPairs>' +
        '<vt:vector size="6" baseType="variant">' +
        '<vt:variant>' +
        '<vt:lpstr>사용한 글꼴</vt:lpstr>' +
        '</vt:variant>' +
        '<vt:variant>' +
        '<vt:i4>2</vt:i4>' +
        '</vt:variant>' +
        '<vt:variant>' +
        '<vt:lpstr>테마</vt:lpstr>' +
        '</vt:variant>' +
        '<vt:variant>' +
        '<vt:i4>1</vt:i4>' +
        '</vt:variant>' +
        '<vt:variant>' +
        '<vt:lpstr>슬라이드 제목</vt:lpstr>' +
        '</vt:variant>' +
        '<vt:variant>' +
        '<vt:i4>5</vt:i4>' +
        '</vt:variant>' +
        '</vt:vector>' +
        '</HeadingPairs>' +
        '<TitlesOfParts>' +
        '<vt:vector size="8" baseType="lpstr">' +
        '<vt:lpstr>맑은 고딕</vt:lpstr>' +
        '<vt:lpstr>Arial</vt:lpstr>' +
        '<vt:lpstr>Office 테마</vt:lpstr>' +
        '<vt:lpstr>PowerPoint 프레젠테이션</vt:lpstr>' +
        '<vt:lpstr>PowerPoint 프레젠테이션</vt:lpstr>' +
        '<vt:lpstr>PowerPoint 프레젠테이션</vt:lpstr>' +
        '<vt:lpstr>PowerPoint 프레젠테이션</vt:lpstr>' +
        '<vt:lpstr>PowerPoint 프레젠테이션</vt:lpstr>' +
        '</vt:vector>' +
        '</TitlesOfParts>' +
        '<Company/>' +
        '<LinksUpToDate></LinksUpToDate>' +
        '<SharedDoc></SharedDoc>' +
        '<HyperlinksChanged></HyperlinksChanged>' +
        '<AppVersion>16.0000</AppVersion>' +
        '</Properties>' +
        '</pkg:xmlData>' +
        '</pkg:part>' +
        '</pkg:package>';

    var xmlContent = [header, content];
    var blob = new Blob(xmlContent, {
        type: 'application/xml;charset=UTF-8',
        encoding: "UTF-8"
    });

    var url = URL.createObjectURL(blob);
    var link = document.getElementById("menu_save");

    link.setAttribute('href', url);
    link.download = "BrainPot PPT";

    console.log(blob.size);
    console.log(blob.type);
    console.log(blob);

    toast("PPT 파일로 변환이 완료되었습니다.");
}

function getXMLLocation(value) {
    var XMLWidth = 8598;
    var XMLHeight = 7882;

    return {
        x: Math.round(XMLWidth * value),
        y: Math.round(XMLHeight * value)
    }
}
