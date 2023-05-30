"""App URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rest_framework_swagger.views import get_swagger_view
from question.views import QuestionViewset, SubjectViewset, QuestionBankViewset, AllCategorizedQuestionsViewset
from exam.views import ExamViewset, StartExamViewset, EndExamViewset, ResultViewset, RankListViewset, \
    UserExamListViewset
from archive.views import ArchiveViewset
from user.views import UserViewset, UserLoginViewset, UserRegistrationViewset
from lecture.views import LectureViewset, CourseViewset
from rest_framework_simplejwt.views import TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static


class OptionalSlashRouter(routers.SimpleRouter):
    def __init__(self):
        super().__init__()
        self.trailing_slash = '/?'


router = OptionalSlashRouter()

router.register("subjects", SubjectViewset, basename="subjects")

router.register("questions", QuestionViewset, basename="questions")
router.register("all-categorized-questions", AllCategorizedQuestionsViewset, basename="questions")
router.register("question-banks", QuestionBankViewset, basename="question-bank")

router.register("exams-list", UserExamListViewset, basename="exams-list")
router.register("exams", ExamViewset, basename="exams")
router.register("exam/start", StartExamViewset, basename="exam-start")
router.register("exam/end", EndExamViewset, basename="exam-end")

router.register("result/exams", ResultViewset, basename="user-result")
router.register("rank-list/exams", RankListViewset, basename="rank-list")

router.register("favourite-questions", ArchiveViewset, basename="archived-questions")

router.register("users", UserViewset, basename="users")
router.register("registration", UserRegistrationViewset, basename="registration")
router.register("login", UserLoginViewset, basename="user-login")

router.register("courses", CourseViewset, basename="class")
router.register("lectures", LectureViewset, basename="lecture")

schema_view = get_swagger_view(title='ExamHall', patterns=router.urls)

urlpatterns = [
        path('admin/', admin.site.urls),
        path('users/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
        path('api/docs', schema_view)
    ] + router.urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
