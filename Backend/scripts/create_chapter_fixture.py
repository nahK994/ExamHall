import json

chapters = []

subject = {
    "বাংলা সাহিত্য": 1,
    "বাংলা ভাষা ও ব্যাকারণ": 2,
    "English literature": 3,
    "English language": 4,
    "পাটিগণিত": 5,
    "বীজগণিত": 6,
    "জ্যামিতি": 7,
    "সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা": 8,
    "কম্পিউটার ও তথ্যপ্রযুক্তি": 9,
    "বাংলাদেশ বিষয়াবলি": 10,
    "আন্তর্জাতিক বিষয়াবলি": 11,
    "নৈতিকতা ও মূল্যবোধ": 12,
    "মানসিক দক্ষতা": 13
}

chapter_to_subject = {
    "বাগধারা ও প্রবাদ প্রবচন": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "এক কথায় প্রকাশ": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "বিপরীতার্থক শব্দ": subject['বাংলা ভাষা ও ব্যাকারণ'],
    "পারিভাষিক শব্দ": subject['বাংলা ভাষা ও ব্যাকারণ'],
    "প্রতিশব্দ": subject['বাংলা ভাষা ও ব্যাকারণ'],
    "ধ্বনি পরিবর্তন": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "সমাস": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "কারক ও বিভক্তি": subject['বাংলা ভাষা ও ব্যাকারণ'],
    "সন্ধি": subject['বাংলা ভাষা ও ব্যাকারণ'],
    "পদ প্রকরণ": subject['বাংলা ভাষা ও ব্যাকারণ'],
    "উপসর্গ": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "অনুসর্গ": subject['বাংলা ভাষা ও ব্যাকারণ'],
    "দ্বিরুক্ত শব্দ": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "শুদ্ধ বানান": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "ণত্ব বিধান ও ষত্ব বিধান": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "ধ্বনি ও বর্ণ প্রকরণ": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "শব্দের সম্ভার": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "বাক্য রূপান্তর": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "প্রকৃতি ও প্রত্যয়": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "বাচ্য": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "যতি বা ছেদ বা বিরাম চিহ্ন": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "পদাশ্রিত নির্দেশক": subject["বাংলা ভাষা ও ব্যাকারণ"], 
    "উক্তি পরিবর্তন": subject["বাংলা ভাষা ও ব্যাকারণ"],
    "বানান ও বাক্যশুদ্ধি": subject["বাংলা ভাষা ও ব্যাকারণ"],


    "চর্যাপদ": subject["বাংলা সাহিত্য"],
    "মঙ্গলকাব্য": subject["বাংলা সাহিত্য"],
    "বাংলা সাহিত্যের মধ্যযুগ": subject["বাংলা সাহিত্য"],
    "বাংলা সাহিত্যের আধুনিক যুগ": subject["বাংলা সাহিত্য"],
    "পত্রিকা, সাময়িকী ও সম্পাদক": subject["বাংলা সাহিত্য"],
    "ভাষা আন্দোলনভিত্তিক গ্রন্থ ও চলচ্চিত্র": subject["বাংলা সাহিত্য"],
    "মুক্তিযুদ্ধ গ্রন্থ ও চলচ্চিত্র": subject["বাংলা সাহিত্য"],
    "উপন্যাস": subject["বাংলা সাহিত্য"],
    "নাটক": subject["বাংলা সাহিত্য"],
    "কবিতা": subject["বাংলা সাহিত্য"],
    "গ্রন্থ ও চরিত্র": subject["বাংলা সাহিত্য"],
    "কাব্যগ্রন্থ": subject["বাংলা সাহিত্য"],
    "মহাকাব্য": subject["বাংলা সাহিত্য"],
    "গীতিকাব্য": subject["বাংলা সাহিত্য"],


    "Right form of verb": subject["English language"],
    "Subject verb agreement": subject["English language"],
    "Word meaning and Spelling": subject["English language"],
    "Idioms and phrases": subject["English language"],
    "Tense": subject["English language"],
    "Parts of Speech": subject["English language"],
    "Voice": subject["English language"],
    "Narration": subject["English language"],
    "Degree": subject["English language"],
    "Synonym and Antonym": subject["English language"],
    "Vocabulary": subject["English language"],
    "Appropriate preposition": subject["English language"],
    "Preposition": subject["English language"],
    "Transformation of Sentences": subject["English language"],
    "Comparison of Degree": subject["English language"],
    "Noun": subject["English language"],
    "Verb": subject["English language"],
    "Adverb": subject["English language"],
    "Adjective": subject["English language"],
    "Linking Verb": subject["English language"],
    "Number": subject["English language"],
    "Usage of Modal Verbs": subject["English language"],
    "Parts of Speech": subject["English language"],
    "Conditional Sentence": subject["English language"],
    "Pronoun": subject["English language"],
    "Analogy": subject["English language"],
    "Article": subject["English language"],
    "Correct Spelling": subject["English language"],
    "Narration": subject["English language"],
    "Proverbs": subject["English language"],
    "Clauses": subject["English language"],


    "নৈতিকতা": subject["নৈতিকতা ও মূল্যবোধ"],
    "মূল্যবোধ": subject["নৈতিকতা ও মূল্যবোধ"],
    "সুশাসন": subject["নৈতিকতা ও মূল্যবোধ"],
    "মনীষীদের উক্তি, গ্রন্থ, কাজকর্ম": subject["নৈতিকতা ও মূল্যবোধ"],
    "অধিকার ও কর্তব্য": subject["নৈতিকতা ও মূল্যবোধ"],
    "সমাজ ও রাষ্ট্র": subject["নৈতিকতা ও মূল্যবোধ"],


    "ভাশাগত যৌক্তিক বিচার": subject["মানসিক দক্ষতা"],
    "গাণিতিক সমস্যা": subject["মানসিক দক্ষতা"],
    "বানান ও ভাষা": subject["মানসিক দক্ষতা"],
    "সংখ্যাগত যোগ্যতা": subject["মানসিক দক্ষতা"],
    "যান্ত্রিক দক্ষতা": subject["মানসিক দক্ষতা"],
    "স্থানাঙ্ক সম্পর্ক": subject["মানসিক দক্ষতা"],
    "বিমূর্ত ধারণার বিচার-বিশ্লেষণ": subject["মানসিক দক্ষতা"],


    "বাস্তব সংখ্যা": subject["পাটিগণিত"],
    "গ.সা.গু ও ল.সা.গু": subject["পাটিগণিত"],
    "শতকরা": subject["পাটিগণিত"],
    "সরল ও যৌগিক মুনাফা": subject["পাটিগণিত"],
    "অনুপাত-সমানুপাত": subject["পাটিগণিত"],
    "লাভ-ক্ষতি": subject["পাটিগণিত"],
    "অন্যান্য (পাটিগণিত)": subject["পাটিগণিত"],


    "বীজগাণিতিক সূত্রাবলি": subject["বীজগণিত"],
    "বহুপদী উৎপাদক": subject["বীজগণিত"],
    "সরল ও দ্বিপদী সমীকরণ": subject["বীজগণিত"],
    "সরল সহ-সমীকরণ": subject["বীজগণিত"],
    "সরল ও দ্বিপদী অসমতা": subject["বীজগণিত"],
    "সূচক ও লগারিদম": subject["বীজগণিত"],
    "সমান্তর ও গুণোত্তর অনুক্রম ও ধারা": subject["বীজগণিত"],
    "অন্যান্য (বীজগণিত)": subject["বীজগণিত"],


    "রেখা, কোণ, ত্রিভুজ ও চতুর্ভুজ সংক্রান্ত উপপাদ্য": subject["জ্যামিতি"],
    "বৃত্ত সংক্রান্ত উপপাদ্য": subject["জ্যামিতি"],
    "পরিমিতি-সমতলীয় ক্ষেত্র ও ঘনবস্তু": subject["জ্যামিতি"],


    "সেট": subject["সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা"],
    "বিন্যাস ও সমাবেশ": subject["সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা"],
    "পরিসংখ্যান": subject["সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা"],
    "সম্ভাব্যতা": subject["সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা"],


    "বাংলাদেশের সংবিধান": subject["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের অর্থনীতি": subject["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের শিল্প ও বাণিজ্য": subject["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের রাজনৈতিক ব্যবস্থা": subject["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের সরকার ব্যবস্থা": subject["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের কৃষিজ সম্পদ": subject["বাংলাদেশ বিষয়াবলি"],
    "বাংলাদেশের জাতীয় বিষয়াবলি": subject["বাংলাদেশ বিষয়াবলি"]
}


for index, chapter in enumerate(chapter_to_subject):
    chapter_item = {
        "model": "question.chaptermodel",
        "pk": index+1,
        "fields": {
            "name": chapter,
            "subject": chapter_to_subject[chapter]
        }
    }
    chapters.append(chapter_item)


with open("chapters.json", 'w', encoding='utf-8') as f:
    json.dump(chapters, f, ensure_ascii=False)