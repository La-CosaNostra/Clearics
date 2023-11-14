function parseChordPro(template,transpose){if(typeof transpose=="undefined"){transpose=false;}
var chordregex=/\[([^\]]*)\]/;var inword=/[a-z]$/;var buffer=[];var chords=[];var last_was_lyric=false;var transpose_chord=function(chord,trans){var notes=['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];var regex=/([A-Z][b#]?)/g;var modulo=function(n,m){return((n%m)+m)%m;}
return chord.replace(regex,function($1){if($1.length>1&&$1[1]=='b'){if($1[0]=='A'){$1="G#";}else{$1=String.fromCharCode($1[0].charCodeAt()-1)+'#';}}
var index=notes.indexOf($1);if(index!=-1){index=modulo((index+trans),notes.length);return notes[index];}
return 'XX';});}
if(!template)return "";template.split("\n").forEach(function(line,linenum){if(line.match(/^#/)){return "";}
if(line.match(chordregex)){if(!buffer.length){buffer.push('<div class="lyric_block">');last_was_lyric=true;}else if(!last_was_lyric){buffer.push('</div><div class="lyric_block">');last_was_lyric=true;}
var chords="";var lyrics="";var chordlen=0;line.split(chordregex).forEach(function(word,pos){var dash=0;if((pos%2)==0){lyrics=lyrics+word.replace(' ',"&nbsp;");if(word.match(this.inword)){dash=1;}
if(word&&word.length<chordlen){chords=chords+"&nbsp;";lyrics=(dash==1)?lyrics+"-&nbsp;":lyrics+"&nbsp&nbsp;";for(i=chordlen-word.length-dash;i!=0;i--){lyrics=lyrics+"&nbsp;";}}else if(word&&word.length==chordlen){chords=chords+"&nbsp;";lyrics=(dash==1)?lyrics+"-":lyrics+"&nbsp;";}else if(word&&word.length>chordlen){for(i=word.length-chordlen;i!=0;i--){chords=chords+"&nbsp;";}}}else{chord=word.replace(/[[]]/,"");if(transpose!==false){chord=transpose_chord(chord,transpose);}
chordlen=chord.length;chords=chords+'<span class="chord" data-original-val="'+chord+'">'+chord+'</span>';}},this);buffer.push('<span class="line">'+chords+"<br/>\n"+lyrics+"</span><br/>");return;}
if(line.match(/^{.*}/)){if(!buffer.length){buffer.push('<div class="command_block">');last_was_lyric=false;}else if(last_was_lyric){buffer.push('</div><div class="command_block">');last_was_lyric=false;}
var matches=line.match(/^{(title|t|subtitle|st|comment|c):\s*(.*)}/,"i");if(matches.length>=3){var command=matches[1];var text=matches[2];var wrap="";switch(command){case "title":case "t":command="title";wrap="h1";break;case "subtitle":case "st":command="subtitle";wrap="h4";break;case "comment":case "c":command="comment";wrap="em";break;}
if(wrap){buffer.push('<'+wrap+' class="'+command+'">'+text+'</'+wrap+'>');}}
return;}
buffer.push(line+"<br/>");},this);return buffer.join("\n");}