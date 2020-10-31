import data from "./information.json";

const getInformation = (name) => {
    return data[name];
};

export default getInformation;
