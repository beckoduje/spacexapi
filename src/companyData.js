// const [companyInfo, setCompanyInfo] = useState();

//   useEffect(() => {
//     fetch("https://api.spacexdata.com/v4/company")
//       .then((response) => response.json())
//       .then((data) => {
//         setCompanyInfo(data);
//       });
//   }, []);

//   console.log(companyInfo);

export const companyData = [];

fetch("https://api.spacexdata.com/v4/company")
  // fetch vraća Promise
  // koristimo then metodu da nešto napravimo s promise
  .then(function (response) {
    // data moramo vratiti i na njemu koristiti json() metodu da dobijemo data (novi promise)
    return response.json();
  })
  // onda opet then metodu
  .then(function (data) {
    companyData.push(data);
  });

fetch("https://api.spacexdata.com/v4/crew")
  // fetch vraća Promise
  // koristimo then metodu da nešto napravimo s promise
  .then(function (response) {
    // data moramo vratiti i na njemu koristiti json() metodu da dobijemo data (novi promise)
    return response.json();
  })
  // onda opet then metodu
  .then(function (data) {
    companyData.push(data);
  });
