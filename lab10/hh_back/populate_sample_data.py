import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hh_back.settings')
django.setup()

# Now you can import your models
from api.models import Company, Vacancy

# Define sample data and insert into the database...


# Define sample data
sample_companies = ['Apple', 'Microsoft', 'Amazon', 'Google', 'Netflix', 'Marvel', 'Uber', 'Facebook']
sample_vacancies = {
    'Apple': ['Full Stack Developer', 'HR Manager', 'Software Engineer'],
    'Microsoft': ['Frontend Developer', 'Data Scientist', 'Project Manager'],
    'Amazon': ['DevOps Engineer', 'Marketing Specialist', 'Product Manager'],
    'Google': ['Machine Learning Engineer', 'UX Designer', 'Sales Manager'],
    'Netflix': ['Backend Developer', 'Content Strategist', 'Quality Assurance Analyst'],
    'Marvel': ['Graphic Designer', 'Content Creator', 'Legal Counsel'],
    'Uber': ['Mobile App Developer', 'Operations Manager', 'Financial Analyst'],
    'Facebook': ['Data Engineer', 'Social Media Manager', 'Business Analyst']
}
sample_cities = ['Manhattan', 'Amsterdam', 'London', 'Frankfurt']

# Insert sample data into the database
for company_name in sample_companies:
    company = Company.objects.create(
        name=company_name,
        description=f"Description for {company_name}",
        city=sample_cities[0],  # Assigning the first city in the list
        address=f"Address for {company_name}"
    )
    for vacancy_title in sample_vacancies[company_name]:
        Vacancy.objects.create(
            name=vacancy_title,
            description=f"Description for {vacancy_title} at {company_name}",
            salary=50000,  # Sample salary
            company=company
        )
