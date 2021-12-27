const generateVaccineTypes = (vaccineDatas) => {
  if (!vaccineDatas) {
    return [];
  }

  const vaccines = vaccineDatas.map((item) => item.vaccine);
  // eslint-disable-next-line no-undef
  const uniqueVaccines = new Set(vaccines);

  return Array.from(uniqueVaccines);
};

export { generateVaccineTypes };
