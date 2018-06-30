const filterAgeGt18 = (arr) => {
	return arr.filter((ele) => {
		return ele.age > 18;
	});
};

export {filterAgeGt18};