This folder contains the text files and scripts used to 
obtain the word bank for our implementation of Wordle.

words_alpha.txt is the original text file used to get 
fourLetters.txt and sixLetters.txt.

The scripts scrap4.py and scrap6.py were ran to obtain the 
above two txt files.

fiveLetters.txt is gotten using wget on a txt file that is 
said to contain the official Wordle wordbank.

To obtain the wordbank for this project yourself, ensure you have
scrap4.py, scrap6.py, and words_alpha.txt in the same folder. Then...

Run the following on the linux servers:
    $ chmod 755 scrap4.py
    $ chmod 755 scrap6.py
    $ ./scrap4.py
    $ ./scrap6.py
    $ wget https://gist.githubusercontent.com/cfreshman/a03ef2cba \
    789d8cf00c08f767e0fad7b/raw/5d752e5f0702da315298a6bb5a771586d \
    6ff445c/wordle-answers-alphabetical.txt