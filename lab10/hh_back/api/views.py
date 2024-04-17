from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')

class CompanyListCreateAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

class VacancyListCreateAPIView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'

class VacancyTopTenAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer


@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = CompanySerializer(company)
    return Response(serializer.data)

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)

@api_view(['GET'])
def company_vacancies(request, pk):
    try:
        company = Company.objects.get(pk=pk)
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)