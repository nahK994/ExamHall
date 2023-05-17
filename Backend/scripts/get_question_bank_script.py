import requests
from bs4 import BeautifulSoup

URL = "https://uttoron.academy/question/44th-bcs/"
r = requests.get(URL)
soup = BeautifulSoup(r.content, features="html.parser")
table = soup.findAll('div', attrs={'class': 'question-item'})

for i, row in enumerate(table):
    question = row.find('div', attrs={'class': 'question'}).p.text

    option_unordered_list = row.find('div', attrs={'class': 'options'}).find('ul')
    correct_answer_tag = option_unordered_list.find('li', attrs={'class': 'is_right'})
    correct_answer = correct_answer_tag.findAll('span')[1].text if (correct_answer_tag is not None) else ''
    options = [option.findAll('span')[1].text for option in option_unordered_list.findAll('li')]

    raw_explanation = row.find('div', attrs={'class': 'question-solve'}).p.get_text()
    explanation = ' '.join(raw_explanation.replace('\n', ' ').split())
    print(i+1, question)
    print(options)
    print(correct_answer)
    print(explanation)
