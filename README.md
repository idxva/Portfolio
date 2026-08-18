# Exercise 1: Tokenize a Given Text
import nltk
from nltk.tokenize import word_tokenize

nltk.download('punkt')

text = "Natural Language Processing is interesting."

tokens = word_tokenize(text)

print(tokens)


# Exercise 2: Get Sentences from a Text Document
import nltk
from nltk.tokenize import sent_tokenize

nltk.download('punkt')

text = "Python is easy. NLP is interesting. I like programming."

sentences = sent_tokenize(text)

print(sentences)


# Exercise 3: Tokenize Text with Stop Words as Delimiters
import nltk
import re
from nltk.corpus import stopwords

nltk.download('stopwords')

text = "This is a simple example for Natural Language Processing."

stop_words = stopwords.words('english')

pattern = '|'.join(stop_words)

result = re.split(pattern, text)

result = [x.strip() for x in result if x.strip()]

print(result)


# Exercise 4: Remove Stop Words and Punctuations
import nltk
import string
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

nltk.download('stopwords')
nltk.download('punkt')

text = "This is an example showing stop words removal!"

words = word_tokenize(text)

stop_words = set(stopwords.words('english'))

result = []

for word in words:
    if word.lower() not in stop_words and word not in string.punctuation:
        result.append(word)

print(result)


# Exercise 5: Perform Stemming
from nltk.stem import PorterStemmer

stemmer = PorterStemmer()

words = ["playing", "played", "plays", "running"]

for word in words:
    print(word, "---->", stemmer.stem(word))


# Exercise 6: Perform Lemmatization
import nltk
from nltk.stem import WordNetLemmatizer

nltk.download('wordnet')

lemmatizer = WordNetLemmatizer()

words = ["cars", "running", "played"]

for word in words:
    print(word, "---->", lemmatizer.lemmatize(word))


# Exercise 7: Extract Usernames from Emails
import re

text = "Contact john@gmail.com and admin@yahoo.com"

emails = re.findall(r'\S+@\S+', text)

for email in emails:
    print(email.split('@')[0])


# Exercise 8: Find Most Common Words Excluding Stopwords
import nltk
from nltk.corpus import stopwords
from collections import Counter

nltk.download('stopwords')

text = "Python is easy and Python is powerful"

words = text.lower().split()

stop = set(stopwords.words('english'))

result = [w for w in words if w not in stop]

print(Counter(result).most_common())


# Exercise 9: Spell Correction
from textblob import TextBlob

text = "I havv a goood book"

corrected = TextBlob(text).correct()

print(corrected)


# Exercise 10: Sentiment Analysis
from textblob import TextBlob

text = "I love Python programming"

analysis = TextBlob(text)

if analysis.sentiment.polarity > 0:
    print("Positive Sentiment")
else:
    print("Negative Sentiment")


# Exercise 11: Extract Noun and Verb Phrases
import nltk

nltk.download('punkt')
nltk.download('averaged_perceptron_tagger_eng')

text = "The boy plays cricket."

words = nltk.word_tokenize(text)

tags = nltk.pos_tag(words)

print(tags)


# Exercise 12: Find Root Word of a Word
from nltk.stem import PorterStemmer

ps = PorterStemmer()

word = "studying"

print(ps.stem(word))


# Exercise 13: Load Iris Dataset into DataFrame
from sklearn.datasets import load_iris
import pandas as pd

iris = load_iris()

df = pd.DataFrame(iris.data,
columns=iris.feature_names)

print(df.shape)
print(type(df))
print(df.head(3))


# Exercise 14: Find Synonyms and Antonyms
import nltk
from nltk.corpus import wordnet

nltk.download('wordnet')

word="good"

synonyms=set()
antonyms=set()

for syn in wordnet.synsets(word):
    for l in syn.lemmas():
        synonyms.add(l.name())
        if l.antonyms():
            antonyms.add(l.antonyms()[0].name())

print(synonyms)
print(antonyms)


# Exercise 15: Display Random Male and Female Names
import nltk
import random

nltk.download('names')

from nltk.corpus import names

male=[(n,'male') for n in names.words('male.txt')]

female=[(n,'female') for n in names.words('female.txt')]

combined=male+female

random.shuffle(combined)

print(combined[:15]) 
