var tagremover=prompt("Enter string with tags");
document.write(tagremover.replaceAll("\\<.*?\\>", ""))
