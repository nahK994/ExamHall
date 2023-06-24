import json
from create_subject_fixture import subject_dict

chapter_dict = {
    "বাগধারা ও প্রবাদ প্রবচন": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "এক কথায় প্রকাশ": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "বিপরীতার্থক শব্দ": subject_dict['বাংলা ভাষা ও ব্যাকারণ'],
    "পারিভাষিক শব্দ": subject_dict['বাংলা ভাষা ও ব্যাকারণ'],
    "প্রতিশব্দ": subject_dict['বাংলা ভাষা ও ব্যাকারণ'],
    "ধ্বনি পরিবর্তন": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "সমাস": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "কারক ও বিভক্তি": subject_dict['বাংলা ভাষা ও ব্যাকারণ'],
    "সন্ধি": subject_dict['বাংলা ভাষা ও ব্যাকারণ'],
    "পদ প্রকরণ": subject_dict['বাংলা ভাষা ও ব্যাকারণ'],
    "উপসর্গ": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "অনুসর্গ": subject_dict['বাংলা ভাষা ও ব্যাকারণ'],
    "দ্বিরুক্ত শব্দ": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "শুদ্ধ বানান": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "ণত্ব বিধান ও ষত্ব বিধান": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "ধ্বনি ও বর্ণ প্রকরণ": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "শব্দের সম্ভার": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "বাক্য রূপান্তর": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "প্রকৃতি ও প্রত্যয়": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "বাচ্য": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "যতি বা ছেদ বা বিরাম চিহ্ন": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "পদাশ্রিত নির্দেশক": subject_dict["বাংলা ভাষা ও ব্যাকারণ"], 
    "উক্তি পরিবর্তন": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],
    "বানান ও বাক্যশুদ্ধি": subject_dict["বাংলা ভাষা ও ব্যাকারণ"],


    "চর্যাপদ": subject_dict["বাংলা সাহিত্য"],
    "মঙ্গলকাব্য": subject_dict["বাংলা সাহিত্য"],
    "বাংলা সাহিত্যের মধ্যযুগ": subject_dict["বাংলা সাহিত্য"],
    "বাংলা সাহিত্যের আধুনিক যুগ": subject_dict["বাংলা সাহিত্য"],
    "পত্রিকা, সাময়িকী ও সম্পাদক": subject_dict["বাংলা সাহিত্য"],
    "ভাষা আন্দোলনভিত্তিক গ্রন্থ ও চলচ্চিত্র": subject_dict["বাংলা সাহিত্য"],
    "মুক্তিযুদ্ধ গ্রন্থ ও চলচ্চিত্র": subject_dict["বাংলা সাহিত্য"],
    "উপন্যাস": subject_dict["বাংলা সাহিত্য"],
    "নাটক": subject_dict["বাংলা সাহিত্য"],
    "কবিতা": subject_dict["বাংলা সাহিত্য"],
    "গ্রন্থ ও চরিত্র": subject_dict["বাংলা সাহিত্য"],
    "কাব্যগ্রন্থ": subject_dict["বাংলা সাহিত্য"],
    "মহাকাব্য": subject_dict["বাংলা সাহিত্য"],
    "গীতিকাব্য": subject_dict["বাংলা সাহিত্য"],


    "Right form of verb": subject_dict["English language"],
    "Subject verb agreement": subject_dict["English language"],
    "Word meaning and Spelling": subject_dict["English language"],
    "Idioms and phrases": subject_dict["English language"],
    "Tense": subject_dict["English language"],
    "Parts of Speech": subject_dict["English language"],
    "Voice": subject_dict["English language"],
    "Narration": subject_dict["English language"],
    "Interjection": subject_dict["English language"],
    "Synonym and Antonym": subject_dict["English language"],
    "Vocabulary": subject_dict["English language"],
    "Appropriate preposition": subject_dict["English language"],
    "Preposition": subject_dict["English language"],
    "Transformation of Sentences": subject_dict["English language"],
    "Kinds of Sentence": subject_dict["English language"],
    "Comparison of Degree": subject_dict["English language"],
    "Noun": subject_dict["English language"],
    "Verb": subject_dict["English language"],
    "Adverb": subject_dict["English language"],
    "Adjective": subject_dict["English language"],
    "Linking Verb": subject_dict["English language"],
    "Number": subject_dict["English language"],
    "Usage of Modal Verbs": subject_dict["English language"],
    "Parts of Speech": subject_dict["English language"],
    "Conditional Sentence": subject_dict["English language"],
    "Pronoun": subject_dict["English language"],
    "Analogy": subject_dict["English language"],
    "Article": subject_dict["English language"],
    "Correct Spelling": subject_dict["English language"],
    "Narration": subject_dict["English language"],
    "Proverbs": subject_dict["English language"],
    "Clauses": subject_dict["English language"],
    "Composition": subject_dict["English language"],
    "One Word Substitution": subject_dict["English language"],


    "নৈতিকতা": subject_dict["নৈতিকতা ও মূল্যবোধ"],
    "মূল্যবোধ": subject_dict["নৈতিকতা ও মূল্যবোধ"],
    "সুশাসন": subject_dict["নৈতিকতা ও মূল্যবোধ"],
    "মনীষীদের উক্তি, গ্রন্থ, কাজকর্ম": subject_dict["নৈতিকতা ও মূল্যবোধ"],
    "অধিকার ও কর্তব্য": subject_dict["নৈতিকতা ও মূল্যবোধ"],
    "সমাজ ও রাষ্ট্র": subject_dict["নৈতিকতা ও মূল্যবোধ"],


    "ভাশাগত যৌক্তিক বিচার": subject_dict["মানসিক দক্ষতা"],
    "গাণিতিক সমস্যা": subject_dict["মানসিক দক্ষতা"],
    "বানান ও ভাষা": subject_dict["মানসিক দক্ষতা"],
    "সংখ্যাগত যোগ্যতা": subject_dict["মানসিক দক্ষতা"],
    "যান্ত্রিক দক্ষতা": subject_dict["মানসিক দক্ষতা"],
    "স্থানাঙ্ক সম্পর্ক": subject_dict["মানসিক দক্ষতা"],
    "বিমূর্ত ধারণার বিচার-বিশ্লেষণ": subject_dict["মানসিক দক্ষতা"],


    "বাস্তব সংখ্যা": subject_dict["পাটিগণিত"],
    "গ.সা.গু ও ল.সা.গু": subject_dict["পাটিগণিত"],
    "শতকরা": subject_dict["পাটিগণিত"],
    "সরল ও যৌগিক মুনাফা": subject_dict["পাটিগণিত"],
    "অনুপাত-সমানুপাত": subject_dict["পাটিগণিত"],
    "লাভ-ক্ষতি": subject_dict["পাটিগণিত"],
    "অন্যান্য (পাটিগণিত)": subject_dict["পাটিগণিত"],


    "বীজগাণিতিক সূত্রাবলি": subject_dict["বীজগণিত"],
    "বহুপদী উৎপাদক": subject_dict["বীজগণিত"],
    "সরল ও দ্বিপদী সমীকরণ": subject_dict["বীজগণিত"],
    "সরল সহ-সমীকরণ": subject_dict["বীজগণিত"],
    "সরল ও দ্বিপদী অসমতা": subject_dict["বীজগণিত"],
    "সূচক ও লগারিদম": subject_dict["বীজগণিত"],
    "সমান্তর ও গুণোত্তর অনুক্রম ও ধারা": subject_dict["বীজগণিত"],
    "অন্যান্য (বীজগণিত)": subject_dict["বীজগণিত"],


    "রেখা, কোণ, ত্রিভুজ ও চতুর্ভুজ সংক্রান্ত উপপাদ্য": subject_dict["জ্যামিতি"],
    "বৃত্ত সংক্রান্ত উপপাদ্য": subject_dict["জ্যামিতি"],
    "পরিমিতি-সমতলীয় ক্ষেত্র ও ঘনবস্তু": subject_dict["জ্যামিতি"],


    "সেট": subject_dict["সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা"],
    "বিন্যাস ও সমাবেশ": subject_dict["সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা"],
    "পরিসংখ্যান": subject_dict["সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা"],
    "সম্ভাব্যতা": subject_dict["সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা"],


    "বাংলাদেশের সংবিধান": subject_dict["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের অর্থনীতি": subject_dict["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের শিল্প ও বাণিজ্য": subject_dict["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের রাজনৈতিক ব্যবস্থা": subject_dict["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের সরকার ব্যবস্থা": subject_dict["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের কৃষিজ সম্পদ": subject_dict["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের জাতীয় বিষয়াবলি": subject_dict["বাংলাদেশ বিষয়াবলি"]
}

chapters = []

for index, chapter_name in enumerate(chapter_dict):
    chapter_item = {
        "model": "question.chaptermodel",
        "pk": index+1,
        "fields": {
            "name": chapter_name,
            "subject": chapter_dict[chapter_name]
        }
    }
    chapters.append(chapter_item)


with open("../fixtures/chapters.json", 'w', encoding='utf-8') as f:
    json.dump(chapters, f, ensure_ascii=False)