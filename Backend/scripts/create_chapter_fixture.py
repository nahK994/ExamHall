import json
from create_subject_fixture import subject_dict


subject_to_chapter_dict = {
    "বাংলাদেশ বিষয়াবলি": [
        "বাংলাদেশের সংবিধান",
        "বাংলাদেশের অর্থনীতি",
        "বাংলাদেশের শিল্প ও বাণিজ্য",
        "বাংলাদেশের রাজনৈতিক ব্যবস্থা",
        "বাংলাদেশের সরকার ব্যবস্থা",
        "বাংলাদেশের কৃষিজ সম্পদ",
        "বাংলাদেশের জাতীয় বিষয়াবলি"
    ],


    "সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা": [
        "সেট",
        "বিন্যাস ও সমাবেশ",
        "পরিসংখ্যান",
        "সম্ভাব্যতা",
    ],


    "বীজগণিত": [
        "বীজগাণিতিক সূত্রাবলি",
        "বহুপদী উৎপাদক",
        "সরল ও দ্বিপদী সমীকরণ",
        "সরল সহ-সমীকরণ",
        "সরল ও দ্বিপদী অসমতা",
        "সূচক ও লগারিদম",
        "সমান্তর ও গুণোত্তর অনুক্রম ও ধারা",
        "অন্যান্য (বীজগণিত)"
    ],


    "জ্যামিতি": [
        "রেখা, কোণ, ত্রিভুজ ও চতুর্ভুজ সংক্রান্ত উপপাদ্য",
        "বৃত্ত সংক্রান্ত উপপাদ্য",
        "পরিমিতি-সমতলীয় ক্ষেত্র ও ঘনবস্তু"
    ],


    "মানসিক দক্ষতা": [
        "ভাশাগত যৌক্তিক বিচার",
        "গাণিতিক সমস্যা",
        "বানান ও ভাষা",
        "সংখ্যাগত যোগ্যতা",
        "যান্ত্রিক দক্ষতা",
        "স্থানাঙ্ক সম্পর্ক",
        "বিমূর্ত ধারণার বিচার-বিশ্লেষণ"
    ],


    "পাটিগণিত": [
        "বাস্তব সংখ্যা",
        "গ.সা.গু ও ল.সা.গু",
        "শতকরা",
        "সরল ও যৌগিক মুনাফা",
        "অনুপাত-সমানুপাত",
        "লাভ-ক্ষতি",
        "অন্যান্য (পাটিগণিত)"
    ],


    "নৈতিকতা ও মূল্যবোধ": [
        "নৈতিকতা",
        "মূল্যবোধ",
        "সুশাসন",
        "মনীষীদের উক্তি, গ্রন্থ, কাজকর্ম",
        "অধিকার ও কর্তব্য",
        "সমাজ ও রাষ্ট্র",
    ],


    "English language": [
        "Right form of verb",
        "Subject verb agreement",
        "Word meaning and Spelling",
        "Idioms and phrases",
        "Tense",
        "Parts of Speech",
        "Voice",
        "Narration",
        "Interjection",
        "Synonym and Antonym",
        "Vocabulary",
        "Appropriate preposition",
        "Preposition",
        "Transformation of Sentences",
        "Kinds of Sentence",
        "Comparison of Degree",
        "Noun",
        "Verb",
        "Adverb",
        "Adjective",
        "Linking Verb",
        "Number",
        "Usage of Modal Verbs",
        "Parts of Speech",
        "Conditional Sentence",
        "Pronoun",
        "Analogy",
        "Article",
        "Correct Spelling",
        "Narration",
        "Proverbs",
        "Clauses",
        "Composition",
        "One Word Substitution",
    ],


    "বাংলা সাহিত্য": [
        "চর্যাপদ",
        "মঙ্গলকাব্য",
        "বাংলা সাহিত্যের মধ্যযুগ",
        "বাংলা সাহিত্যের আধুনিক যুগ",
        "পত্রিকা, সাময়িকী ও সম্পাদক",
        "ভাষা আন্দোলনভিত্তিক গ্রন্থ ও চলচ্চিত্র",
        "মুক্তিযুদ্ধ গ্রন্থ ও চলচ্চিত্র",
        "উপন্যাস",
        "নাটক",
        "কবিতা",
        "গ্রন্থ ও চরিত্র",
        "কাব্যগ্রন্থ",
        "মহাকাব্য",
        "গীতিকাব্য",
    ],


    "বাংলা ভাষা ও ব্যাকারণ": [
        "বাগধারা ও প্রবাদ প্রবচন",
        "এক কথায় প্রকাশ",
        "বিপরীতার্থক শব্দ",
        "পারিভাষিক শব্দ",
        "প্রতিশব্দ",
        "ধ্বনি পরিবর্তন",
        "সমাস",
        "কারক ও বিভক্তি",
        "সন্ধি",
        "পদ প্রকরণ",
        "উপসর্গ",
        "অনুসর্গ",
        "দ্বিরুক্ত শব্দ",
        "শুদ্ধ বানান",
        "ণত্ব বিধান ও ষত্ব বিধান",
        "ধ্বনি ও বর্ণ প্রকরণ",
        "শব্দের সম্ভার",
        "বাক্য রূপান্তর",
        "প্রকৃতি ও প্রত্যয়",
        "বাচ্য",
        "যতি বা ছেদ বা বিরাম চিহ্ন",
        "পদাশ্রিত নির্দেশক", 
        "উক্তি পরিবর্তন",
        "বানান ও বাক্যশুদ্ধি",
    ]
}

chapters = []

for subject_name, subject_name in enumerate(subject_to_chapter_dict):
    for chapter_index, chapter_name in enumerate(subject_to_chapter_dict[subject_name]):
        chapter_item = {
            "model": "question.chaptermodel",
            "pk": 50*subject_dict[subject_name] + chapter_index,
            "fields": {
                "name": chapter_name,
                "subject": subject_dict[subject_name]
            }
        }
        chapters.append(chapter_item)


with open("../fixtures/chapters.json", 'w', encoding='utf-8') as f:
    json.dump(chapters, f, ensure_ascii=False)