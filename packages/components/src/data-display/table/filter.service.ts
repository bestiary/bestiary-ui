import type { DataTableFilterMeta, FilterMetadata } from './table.props';

export const FilterService = {
    filter(
        value: any[],
        filters: DataTableFilterMeta,
        globalFilterFields: string[],
        resolveFieldData: (data: any, field: string) => any
    ): any[] {
        if (!filters || Object.keys(filters).length === 0) return value;

        return value.filter(row => {
            // 1. Глобальний фільтр
            if (filters['global']) {
                const globalMeta = filters['global'] as FilterMetadata;
                const globalValue = globalMeta.value;

                if (globalValue !== null && globalValue !== undefined && globalValue !== '') {
                    const hasGlobalMatch = globalFilterFields.some(field => {
                        const fieldValue = resolveFieldData(row, field);
                        return this.evaluate(fieldValue, globalValue, globalMeta.matchMode);
                    });
                    if (!hasGlobalMatch) return false;
                }
            }

            // 2. Фільтри колонок
            for (const field in filters) {
                if (field === 'global') continue;

                const filterMeta = filters[field];
                const fieldValue = resolveFieldData(row, field);

                if ('constraints' in filterMeta) {
                    // Режим FilterOperatorMetadata (Advanced)
                    const operator = filterMeta.operator || 'and';
                    const matches = filterMeta.constraints.map(c =>
                        this.evaluate(fieldValue, c.value, c.matchMode)
                    );

                    const isMatch = operator === 'and'
                        ? matches.every(m => m)
                        : matches.some(m => m);

                    if (!isMatch) return false;
                } else {
                    // Режим FilterMetadata (Basic)
                    if (!this.evaluate(fieldValue, filterMeta.value, filterMeta.matchMode)) {
                        return false;
                    }
                }
            }

            return true;
        });
    },

    evaluate(value: any, filter: any, mode: string): boolean {
        // Якщо фільтр порожній — пропускаємо всі значення
        if (filter === null || filter === undefined || filter === '') return true;

        // Якщо значення в базі порожнє, а фільтр — ні — це не співпадіння
        if (value === null || value === undefined) return false;

        // Date comparison
        if (value instanceof Date || (typeof value === 'string' && !isNaN(Date.parse(value)) && mode.startsWith('date'))) {
            const vTime = new Date(value).getTime();
            const fTime = new Date(filter).getTime();
            switch (mode) {
                case 'dateIs':     return vTime === fTime;
                case 'dateIsNot':  return vTime !== fTime;
                case 'dateBefore': return vTime < fTime;
                case 'dateAfter':  return vTime > fTime;
            }
        }

        // Boolean & Numeric Equals (без приведення до рядка для точності)
        if (typeof value === 'boolean' || typeof value === 'number') {
            switch (mode) {
                case 'equals':    return value === filter;
                case 'notEquals': return value !== filter;
            }
        }

        // String comparison
        const v = String(value).toLowerCase();
        const f = String(filter).toLowerCase();

        switch (mode) {
            case 'startsWith':  return v.startsWith(f);
            case 'contains':    return v.includes(f);
            case 'notContains': return !v.includes(f);
            case 'endsWith':    return v.endsWith(f);
            case 'equals':      return v === f;
            case 'notEquals':   return v !== f;
            case 'in':          return Array.isArray(filter) ? filter.includes(value) : false;
            case 'lt':          return value < filter;
            case 'lte':         return value <= filter;
            case 'gt':          return value > filter;
            case 'gte':         return value >= filter;
            case 'between':     return Array.isArray(filter) && value >= filter[0] && value <= filter[1];
            default:            return true;
        }
    }
};