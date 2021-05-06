export const computed = {
    pagedData() {
        return this.tableData.slice(this.from, this.to);
    },
    queriedData() {
        if (!this.searchQuery) {
            this.pagination.total = this.tableData.length;
            return this.pagedData;
        }
        let result = this.tableData.filter((row) => {
            let isIncluded = false;
            for (let key of this.propsToSearch) {
                let rowValue = row[key].toString().toLowerCase();
                if (
                    rowValue.includes &&
                    rowValue.includes(this.searchQuery.toLowerCase())
                ) {
                    isIncluded = true;
                }
            }
            return isIncluded;
        });
        this.pagination.total = result.length;
        return result.slice(this.from, this.to);
    },
    to() {
        let highBound = this.from + this.pagination.perPage;
        if (this.total < highBound) {
            highBound = this.total;
        }
        return highBound;
    },
    from() {
        return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total() {
        this.pagination.total = this.tableData.length;
        return this.tableData.length;
    },
}

export const data = {
	pagination: {
		perPage: 5,
		currentPage: 1,
		perPageOptions: [5, 10, 20, 30, 100],
		total: 0,
	},
	searchQuery: '',
}
