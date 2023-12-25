from django_filters import FilterSet
from .models import ListModel

class Filter(FilterSet):
    class Meta:
        model = ListModel
        fields = {
            "id": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range'],
            "company_name": ['exact', 'iexact', 'contains', 'icontains'],
            "company_city": ['exact', 'iexact', 'contains', 'icontains'],
            "company_address": ['exact', 'iexact', 'contains', 'icontains'],
            "company_contact": ['exact', 'iexact', 'contains', 'icontains'],
            "company_manager": ['exact', 'iexact', 'contains', 'icontains'],
            "creater": ['exact', 'iexact', 'contains', 'icontains'],
            "is_delete": ['exact', 'iexact'],
            "create_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range'],
            "update_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']
        }
