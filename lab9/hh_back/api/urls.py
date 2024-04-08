from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyListCreateAPIView.as_view(), name='company-list'),
    path('companies/<int:id>/', views.CompanyRetrieveUpdateDestroyAPIView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', views.VacancyListCreateAPIView.as_view(), name='company-vacancies'),
    path('vacancies/', views.VacancyListCreateAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', views.VacancyRetrieveUpdateDestroyAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.VacancyTopTenAPIView.as_view(), name='vacancy-top-ten'),
]
