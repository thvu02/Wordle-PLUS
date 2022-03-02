This folder contains the text files and scripts used to 
obtain the word bank for our implementation of Wordle.

words_alpha.txt is the original text file used to get 
fourLetters.txt and sixLetters.txt.

The scripts scrap4.py and scrap6.py were ran to obtain the 
above two txt files.

fiveLetters.txt is gotten by doing the following. I used wget on 
two links. One link contains potential Wordle guesses while 
another contains possible Wordle answers. These two files were 
named guesses.txt and answers.txt. Once I had the two files, I
ran the Python script combine.py which combined and sorted the two
files and gave an output file fiveLetters.txt.

To obtain the wordbank (fourLetters.txt, fiveLetters.txt, sixLetters.txt)
for this project yourself, ensure you have scrap4.py, scrap6.py, and 
words_alpha.txt in the same folder. Also, have answers.txt, guesses.txt, 
and combine.py in the same folder.

Then...run the following on the linux servers:

    $ chmod 755 scrap4.py

    $ chmod 755 scrap6.py

    $ ./scrap4.py

    $ ./scrap6.py

    $ chmod 755 combine.py

    $ ./combine.py