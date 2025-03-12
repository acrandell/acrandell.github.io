(() => {
  
    
    const Filters = (props) => {
        let updateCountry = (clickEvent) => {
            props.updateFormState({
                Country: clickEvent.target.value,  // Country
            });
        }

        let updatePlatform = (clickEvent) => {
            props.updateFormState({
                Platform: clickEvent.target.value,  // capture selected platform
            });
        }

        let updateStars = (clickEvent) => {
            props.updateFormState({
                Stars: clickEvent.target.value,  // Stars filter
            });
        }

        let updateRank = (inputEvent) => {
            const rankValue = inputEvent.target.value;
            // Allow only numbers or empty values
            if (rankValue === '' || !isNaN(rankValue)) {
                props.updateFormState({
                    Rank: rankValue,  // Rank filter
                });
            }
        }

        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <label htmlFor="platformSelect"><b>Platform</b></label>
                        </div>
                        <div className='col-md-2'>
                            <select id="platformSelect" onChange={updatePlatform}>
                                <option value="">Select Platform</option>
                                <option value="N64">N64</option>
                                <option value="EMU">Emulator</option>
                                <option value="VC">Virtual Machine</option>
                            </select>
                        </div>
                        <div className='col-md-2'>
                            <label htmlFor="countrySelect"><b>Country</b></label>
                        </div>
                        <div className='col-md-2'>
                            <select id="countrySelect" onChange={updateCountry}>
                                <option value="">Select Country</option>
                                <option value="USA">USA</option>
                                <option value="Japan">Japan</option>
                                <option value="Spain">Spain</option>
                                <option value="Canada">Canada</option>
                                <option value="France">France</option>
                            </select>
                        </div>
                        <div className='col-md-2'>
                            <label htmlFor="starsSelect"><b>Stars</b></label>
                        </div>
                        <div className='col-md-2'>
                            <select id="starsSelect" onChange={updateStars}>
                                <option value="">Select Stars</option>
                                <option value="120-Stars">120-Stars</option>
                                <option value="70-Stars">70-Stars</option>
                                <option value="16-Stars">16-Stars</option>
                                <option value="1-Stars">1-Stars</option>
                            </select>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-md-2'>
                            <label htmlFor="rankSearch"><b>Rank</b></label>
                        </div>
                        <div className='col-md-2'>
                            <input
                                type="number"
                                id="rankSearch"
                                value={props.rankValue} // Bind input value to state
                                onChange={updateRank}
                                placeholder="Enter Rank"
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    const DataTable = (props) => {
        return (
            <table className="text-center table table-bordered">
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Time</th>
                        <th>Platform</th>
                        <th>Country</th>
                        <th>Stars</th>
                        <th>Region</th>
                    </tr>

                    {props.dataToDisplay.map((row, i) => {
                        return (
                            <tr key={i}>
                                <td>{row.Rank}</td>
                                <td>{row.Player}</td>
                                <td>{row.Time}</td>
                                <td>{row.Platform}</td>
                                <td>{row.Country}</td>
                                <td>{row.Stars}</td>
                                <td>{row.Region}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);

            this.originalData = props.originalData;

            this.state = {
                Country: '',
                Platform: '',
                Stars: '',
                Rank: '',  // New state for Rank filter
            };

            this.updateFormState = this.updateFormState.bind(this);
        }

        updateFormState(specification) {
            this.setState(specification);
        }

        render() {
            let filteredData = this.originalData;

            // Apply Platform filter if available
            if (this.state.Platform !== '') {
                filteredData = filteredData.filter((row) => row.Platform === this.state.Platform);
            }

            // Apply Country filter if available
            if (this.state.Country !== '') {
                filteredData = filteredData.filter((row) => row.Country === this.state.Country);
            }

            // Apply Stars filter if available
            if (this.state.Stars !== '') {
                filteredData = filteredData.filter((row) => row.Stars === this.state.Stars);
            }

            // Apply Rank filter if available (handle empty value and numeric validation)
            if (this.state.Rank !== '') {
                filteredData = filteredData.filter((row) => row.Rank === parseInt(this.state.Rank, 10));
            }

            return (
                <React.Fragment>
                    <Filters 
                        updateFormState={this.updateFormState} 
                        rankValue={this.state.Rank}  // Pass current rank value to the filter component
                    />
                    <hr />
                    <DataTable dataToDisplay={filteredData} />
                </React.Fragment>
            );
        }
    }



    const SpeedData = [
        {
            "Rank": "1",
            "Player": "Weegee",
            "Time": "1H 36m 02s",
            "Platform": "N64",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "2",
            "Player": "Karin",
            "Time": "1H 36m 25s",
            "Platform": "N64",
            "Country": "Japan",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "3",
            "Player": "Ikori_o",
            "Time": "1H 36m 36s",
            "Platform": "N64",
            "Country": "Japan",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "4",
            "Player": "Parsee02",
            "Time": "1H 36m 44s",
            "Platform": "N64",
            "Country": "Japan",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "5",
            "Player": "Cheese",
            "Time": "1H 36m 45s",
            "Platform": "N64",
            "Country": "Spain",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "6",
            "Player": "Marlene",
            "Time": "1H 37m 03s",
            "Platform": "N64",
            "Country": "Unknown",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "7",
            "Player": "Simply",
            "Time": "1H 37m 06s",
            "Platform": "N64",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "8",
            "Player": "Liam",
            "Time": "1H 37m 17s",
            "Platform": "N64",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "9",
            "Player": "Puncayshun",
            "Time": "1H 37m 31s",
            "Platform": "N64",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "10",
            "Player": "Kally",
            "Time": "1H 37m 32s",
            "Platform": "N64",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "11",
            "Player": "BeastAssassin68",
            "Time": "1H 37m 37s",
            "Platform": "N64",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "12",
            "Player": "Smau",
            "Time": "1H 37m 38s",
            "Platform": "N64",
            "Country": "Finland",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "13",
            "Player": "Batora",
            "Time": "1H 37m 37s",
            "Platform": "N64",
            "Country": "Japan",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "14",
            "Player": "Dezanig",
            "Time": "1H 37m 55s",
            "Platform": "N64",
            "Country": "Brazil",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "1",
            "Player": "RianDiCielo",
            "Time": "1H 39m 19s",
            "Platform": "VC",
            "Country": "Panama",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "2",
            "Player": "Kally",
            "Time": "1H 39m 44s",
            "Platform": "VC",
            "Country": "USA",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "3",
            "Player": "itsbeeve",
            "Time": "1H 40m 06s",
            "Platform": "VC",
            "Country": "USA",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "4",
            "Player": "odme_",
            "Time": "1H 40m 23s",
            "Platform": "VC",
            "Country": "USA",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "5",
            "Player": "Aleph64",
            "Time": "1H 40m 40s",
            "Platform": "VC",
            "Country": "Germany",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "6",
            "Player": "Soda",
            "Time": "1H 40m 46s",
            "Platform": "VC",
            "Country": "Unknown",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "7",
            "Player": "Paracusia",
            "Time": "1H 40m 59s",
            "Platform": "VC",
            "Country": "Australia",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "8",
            "Player": "JJsrl",
            "Time": "1H 41m 37s",
            "Platform": "VC",
            "Country": "USA",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "9",
            "Player": "Finnii602",
            "Time": "1H 41m 54s",
            "Platform": "VC",
            "Country": "Germany",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "10",
            "Player": "siglemic",
            "Time": "1H 43m 22s",
            "Platform": "VC",
            "Country": "USA",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "11",
            "Player": "Issey",
            "Time": "1H 43m 37s",
            "Platform": "VC",
            "Country": "Brazil",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "12",
            "Player": "CpKaka",
            "Time": "1H 43m 53s",
            "Platform": "VC",
            "Country": "Sweden",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "13",
            "Player": "Fizz",
            "Time": "1H 44m 20s",
            "Platform": "VC",
            "Country": "USA",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "14",
            "Player": "FireGoesFirst",
            "Time": "1H 45m 10s",
            "Platform": "VC",
            "Country": "Australia",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "15",
            "Player": "BigCheese",
            "Time": "1H 45m 16s",
            "Platform": "VC",
            "Country": "USA",
            "Region": "USA",
            "Stars": "120-Stars"
        },
        {
            "Rank": "1",
            "Player": "Mauir",
            "Time": "1H 38m 21s",
            "Platform": "EMU",
            "Country": "Chile",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "2",
            "Player": "Raisn",
            "Time": "1H 38m 53s",
            "Platform": "EMU",
            "Country": "Germany",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "3",
            "Player": "taciturn",
            "Time": "1H 39m 02s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "4",
            "Player": "JustLikeRusted",
            "Time": "1H 39m 31s",
            "Platform": "EMU",
            "Country": "Canada",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "5",
            "Player": "GoeM",
            "Time": "1H 40m 10s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "6",
            "Player": "Harchi",
            "Time": "1H 40m 22s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "7",
            "Player": "Scroggles",
            "Time": "1H 40m 37s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "8",
            "Player": "Theo",
            "Time": "1H 40m 50s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "9",
            "Player": "Yogi",
            "Time": "1H 41m 14s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "10",
            "Player": "Xylo",
            "Time": "1H 41m 34s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "11",
            "Player": "Scales",
            "Time": "1H 41m 59s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "12",
            "Player": "BigHoss",
            "Time": "1H 42m 00s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "13",
            "Player": "Leafy",
            "Time": "1H 42m 26s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "14",
            "Player": "Zach",
            "Time": "1H 42m 59s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        {
            "Rank": "15",
            "Player": "Clarence",
            "Time": "1H 43m 40s",
            "Platform": "EMU",
            "Country": "USA",
            "Region": "Japan",
            "Stars": "120-Stars"
        },
        //  <!-- 120 End -->

        // Add more data with Starss field (120-Stars, 70-Stars, etc.)
        {
            "Rank": "1",
            "Player": "ikori_o",
            "Time": "46m 28s",
            "Platform": "N64",
            "Country": "Japan",
            "Stars": "70-Stars",
            "Region": "Japan"
        },
        {
            "Rank": "2",
            "Player": "Suigi",
            "Time": "46m 41s",
            "Platform": "N64",
            "Country": "Canada",
            "Stars": "70-Stars",
            "Region": "Canada"
        },
        {
            "Rank": "3",
            "Player": "Parsee02",
            "Time": "46m 54s",
            "Platform": "N64",
            "Country": "Japan",
            "Stars": "70-Stars",
            "Region": "Japan"
        },
        {
            "Rank": "4",
            "Player": "Benji64",
            "Time": "46m 56s",
            "Platform": "N64",
            "Country": "Austria",
            "Stars": "70-Stars",
            "Region": "Austria"
        },
        {
            "Rank": "5",
            "Player": "Weegee",
            "Time": "46m 58s",
            "Platform": "N64",
            "Country": "USA (Michigan)",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "6",
            "Player": "Dwhatever",
            "Time": "46m 59s",
            "Platform": "N64",
            "Country": "Germany",
            "Stars": "70-Stars",
            "Region": "Germany"
        },
        {
            "Rank": "7",
            "Player": "Goldrush",
            "Time": "46m 59s",
            "Platform": "N64",
            "Country": "Japan",
            "Stars": "70-Stars",
            "Region": "Japan"
        },
        {
            "Rank": "8",
            "Player": "marlene",
            "Time": "47m 10s",
            "Platform": "N64",
            "Country": "Japan",
            "Stars": "70-Stars",
            "Region": "Japan"
        },
        {
            "Rank": "9",
            "Player": "KANNO",
            "Time": "47m 13s",
            "Platform": "N64",
            "Country": "Japan",
            "Stars": "70-Stars",
            "Region": "Japan"
        },
        {
            "Rank": "10",
            "Player": "Taggo",
            "Time": "47m 18s",
            "Platform": "N64",
            "Country": "Sweden",
            "Stars": "70-Stars",
            "Region": "Sweden"
        },
        {
            "Rank": "11",
            "Player": "Kally",
            "Time": "47m 21s",
            "Platform": "N64",
            "Country": "USA (Colorado)",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "12",
            "Player": "puncayshun",
            "Time": "47m 23s",
            "Platform": "N64",
            "Country": "USA",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "13",
            "Player": "Xoofey",
            "Time": "47m 23s",
            "Platform": "N64",
            "Country": "USA (Maryland)",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "14",
            "Player": "cheese",
            "Time": "47m 23s",
            "Platform": "N64",
            "Country": "Spain",
            "Stars": "70-Stars",
            "Region": "Spain"
        },
        {
            "Rank": "15",
            "Player": "Biinny",
            "Time": "47m 27s",
            "Platform": "N64",
            "Country": "England",
            "Stars": "70-Stars",
            "Region": "England"
        },
        {
            "Rank": "1",
            "Player": "Finnii602",
            "Time": "46m 46s",
            "Platform": "VC",
            "Country": "Germany",
            "Stars": "70-Stars",
            "Region": "Rhineland-Palatinate"
        },
        {
            "Rank": "2",
            "Player": "RianDiCielo",
            "Time": "47m 05s",
            "Platform": "VC",
            "Country": "Panama",
            "Stars": "70-Stars",
            "Region": "Panama"
        },
        {
            "Rank": "3",
            "Player": "Aleph64",
            "Time": "47m 46s",
            "Platform": "VC",
            "Country": "Germany",
            "Stars": "70-Stars",
            "Region": "Lower Saxony"
        },
        {
            "Rank": "4",
            "Player": "Kally",
            "Time": "47m 48s",
            "Platform": "VC",
            "Country": "USA (Colorado Springs)",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "5",
            "Player": "Soda",
            "Time": "47m 48s",
            "Platform": "VC",
            "Country": "Unknown",
            "Stars": "70-Stars",
            "Region": "N/A"
        },
        {
            "Rank": "6",
            "Player": "Maosfx",
            "Time": "48m 19s",
            "Platform": "VC",
            "Country": "USA (Virginia)",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "7",
            "Player": "Paracusia",
            "Time": "48m 23s",
            "Platform": "VC",
            "Country": "Australia",
            "Stars": "70-Stars",
            "Region": "New South Wales"
        },
        {
            "Rank": "8",
            "Player": "siglemic",
            "Time": "48m 28s",
            "Platform": "VC",
            "Country": "USA",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "9",
            "Player": "KANNO",
            "Time": "48m 31s",
            "Platform": "Switch",
            "Country": "Japan",
            "Stars": "70-Stars",
            "Region": "Japan"
        },
        {
            "Rank": "10",
            "Player": "cheese",
            "Time": "48m 38s",
            "Platform": "VC",
            "Country": "Spain",
            "Stars": "70-Stars",
            "Region": "Madrid"
        },
        {
            "Rank": "11",
            "Player": "BigCheese",
            "Time": "48m 39s",
            "Platform": "VC",
            "Country": "USA (West Virginia)",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "12",
            "Player": "bluntslide42",
            "Time": "48m 46s",
            "Platform": "VC",
            "Country": "USA",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "13",
            "Player": "Odme_",
            "Time": "48m 52s",
            "Platform": "VC",
            "Country": "USA (Virginia)",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "14",
            "Player": "Issey",
            "Time": "48m 58s",
            "Platform": "VC",
            "Country": "Brazil",
            "Stars": "70-Stars",
            "Region": "Brazil"
        },
        {
            "Rank": "15",
            "Player": "PhoenixAUS",
            "Time": "48m 58s",
            "Platform": "VC",
            "Country": "Unknown",
            "Stars": "70-Stars",
            "Region": "N/A"
        },
        {
            "Rank": "1",
            "Player": "taihou",
            "Time": "46m 42s",
            "Platform": "N64",
            "Country": "Japan",
            "Stars": "70-Stars",
            "Region": "Japan"
        },
        {
            "Rank": "2",
            "Player": "Mauir",
            "Time": "47m 01s",
            "Platform": "N64",
            "Country": "Chile",
            "Stars": "70-Stars",
            "Region": "Chile"
        },
        {
            "Rank": "3",
            "Player": "Raisn",
            "Time": "47m 07s",
            "Platform": "N64",
            "Country": "Germany",
            "Stars": "70-Stars",
            "Region": "Germany"
        },
        {
            "Rank": "4",
            "Player": "Zhilkan",
            "Time": "47m 29s",
            "Platform": "N64",
            "Country": "Spain",
            "Stars": "70-Stars",
            "Region": "Murcia"
        },
        {
            "Rank": "5",
            "Player": "Sigotu",
            "Time": "47m 38s",
            "Platform": "N64",
            "Country": "Poland",
            "Stars": "70-Stars",
            "Region": "Warmińsko-mazurskie"
        },
        {
            "Rank": "6",
            "Player": "Chemus",
            "Time": "47m 42s",
            "Platform": "N64",
            "Country": "Brazil",
            "Stars": "70-Stars",
            "Region": "Brazil"
        },
        {
            "Rank": "7",
            "Player": "ElDeve",
            "Time": "47m 46s",
            "Platform": "N64",
            "Country": "Argentina",
            "Stars": "70-Stars",
            "Region": "Argentina"
        },
        {
            "Rank": "8",
            "Player": "taciturn",
            "Time": "47m 46s",
            "Platform": "N64",
            "Country": "USA (Oregon)",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "9",
            "Player": "Carlos64",
            "Time": "47m 56s",
            "Platform": "N64",
            "Country": "Spain",
            "Stars": "70-Stars",
            "Region": "Spain"
        },
        {
            "Rank": "10",
            "Player": "Dude095",
            "Time": "48m 17s",
            "Platform": "N64",
            "Country": "USA",
            "Stars": "70-Stars",
            "Region": "USA"
        },
        {
            "Rank": "11",
            "Player": "Nebula",
            "Time": "48m 24s",
            "Platform": "N64",
            "Country": "Australia",
            "Stars": "70-Stars",
            "Region": "Australia"
        },
        {
            "Rank": "12",
            "Player": "Sunnard",
            "Time": "48m 28s",
            "Platform": "N64",
            "Country": "France",
            "Stars": "70-Stars",
            "Region": "France"
        },
        {
            "Rank": "13",
            "Player": "Cysse",
            "Time": "48m 35s",
            "Platform": "N64",
            "Country": "France",
            "Stars": "70-Stars",
            "Region": "France"
        },
        {
            "Rank": "14",
            "Player": "Flandral",
            "Time": "48m 41s",
            "Platform": "N64",
            "Country": "Brazil",
            "Stars": "70-Stars",
            "Region": "Brazil"
        },
        {
            "Rank": "15",
            "Player": "piegolds",
            "Time": "48m 41s",
            "Platform": "N64",
            "Country": "Australia",
            "Stars": "70-Stars",
            "Region": "Australia"
        },
        {
            "Rank": "16",
            "Player": "NotGorilla",
            "Time": "48m 41s",
            "Platform": "N64",
            "Country": "Sweden",
            "Stars": "70-Stars",
            "Region": "Stockholm"
        },


        // 70 Star Ends

        
            {
                "Rank": "1",
                "Player": "Suigi",
                "Time": "14m 35s 500ms",
                "Platform": "N64",
                "Country": "Canada",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "2",
                "Player": "Slipperynip",
                "Time": "14m 41s 210ms",
                "Platform": "N64",
                "Country": "USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "3",
                "Player": "Weegee",
                "Time": "14m 45s 210ms",
                "Platform": "N64",
                "Country": "Michigan, USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "4",
                "Player": "GTM",
                "Time": "14m 53s 400ms",
                "Platform": "N64",
                "Country": "Antarctica",
                "Stars": "16-Stars",
                "Region": "Antarctica"
            },
            {
                "Rank": "5",
                "Player": "Dowsky",
                "Time": "14m 55s 810ms",
                "Platform": "N64",
                "Country": "USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "6",
                "Player": "treybordo",
                "Time": "14m 55s 940ms",
                "Platform": "N64",
                "Country": "USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "7",
                "Player": "KANNO",
                "Time": "14m 56s 220ms",
                "Platform": "N64",
                "Country": "Japan",
                "Stars": "16-Stars",
                "Region": "Asia"
            },
            {
                "Rank": "8",
                "Player": "Tag609",
                "Time": "14m 56s 330ms",
                "Platform": "N64",
                "Country": "California, USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "9",
                "Player": "xandrey64",
                "Time": "14m 56s 530ms",
                "Platform": "N64",
                "Country": "Costa Rica",
                "Stars": "16-Stars",
                "Region": "Central America"
            },
            {
                "Rank": "10",
                "Player": "gamiru",
                "Time": "14m 57s 460ms",
                "Platform": "N64",
                "Country": "Japan",
                "Stars": "16-Stars",
                "Region": "Asia"
            },
            {
                "Rank": "11",
                "Player": "Zapy",
                "Time": "14m 58s 100ms",
                "Platform": "N64",
                "Country": "Saitama, Japan",
                "Stars": "16-Stars",
                "Region": "Asia"
            },
            {
                "Rank": "12",
                "Player": "Parsee02",
                "Time": "14m 58s 890ms",
                "Platform": "N64",
                "Country": "Japan",
                "Stars": "16-Stars",
                "Region": "Asia"
            },
            {
                "Rank": "13",
                "Player": "akki",
                "Time": "14m 59s 330ms",
                "Platform": "N64",
                "Country": "Japan",
                "Stars": "16-Stars",
                "Region": "Asia"
            },
            {
                "Rank": "14",
                "Player": "Thomkar",
                "Time": "15m 04s 730ms",
                "Platform": "N64",
                "Country": "Norway",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "15",
                "Player": "spener1122",
                "Time": "15m 04s 830ms",
                "Platform": "N64",
                "Country": "Canada",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "1",
                "Player": "Finnii602",
                "Time": "14m 52s",
                "Platform": "VC",
                "Country": "Rhineland-Palatinate, Germany",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "2",
                "Player": "Tag609",
                "Time": "15m 15s",
                "Platform": "VC",
                "Country": "California, USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "3",
                "Player": "darkdog47",
                "Time": "15m 18s",
                "Platform": "VC",
                "Country": "USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "4",
                "Player": "BigCheese",
                "Time": "15m 26s",
                "Platform": "VC",
                "Country": "West Virginia, USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "5",
                "Player": "CapnSR",
                "Time": "15m 30s",
                "Platform": "VC",
                "Country": "Canada",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "6",
                "Player": "Soda",
                "Time": "15m 32s",
                "Platform": "VC",
                "Country": "USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "7",
                "Player": "PhoenixAUS",
                "Time": "15m 34s",
                "Platform": "VC",
                "Country": "USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "8",
                "Player": "jepega",
                "Time": "15m 37s",
                "Platform": "VC",
                "Country": "Netherlands",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "9",
                "Player": "KANNO",
                "Time": "15m 40s",
                "Platform": "Switch",
                "Country": "Japan",
                "Stars": "16-Stars",
                "Region": "Asia"
            },
            {
                "Rank": "10",
                "Player": "CyanogenSm64",
                "Time": "15m 40s",
                "Platform": "Switch",
                "Country": "Uzbekistan",
                "Stars": "16-Stars",
                "Region": "Asia"
            },
            {
                "Rank": "11",
                "Player": "Aleph64",
                "Time": "15m 43s",
                "Platform": "VC",
                "Country": "Lower Saxony, Germany",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "12",
                "Player": "alextolio",
                "Time": "15m 46s",
                "Platform": "VC",
                "Country": "Greece",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "13",
                "Player": "Kudo",
                "Time": "15m 46s",
                "Platform": "VC",
                "Country": "Pays de la Loire, France",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "14",
                "Player": "Odme_",
                "Time": "15m 48s",
                "Platform": "VC",
                "Country": "Virginia, USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "15",
                "Player": "AdamFerrari",
                "Time": "15m 52s",
                "Platform": "VC",
                "Country": "USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "1",
                "Player": "Raisn",
                "Time": "14m 58s",
                "Platform": "EMU",
                "Country": "Germany",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "2",
                "Player": "Kaimatix",
                "Time": "15m 09s",
                "Platform": "EMU",
                "Country": "England",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "3",
                "Player": "Joshua_iz_drunk",
                "Time": "15m 09s",
                "Platform": "EMU",
                "Country": "Wexford, Ireland",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "4",
                "Player": "Mauir",
                "Time": "15m 09s",
                "Platform": "EMU",
                "Country": "Chile",
                "Stars": "16-Stars",
                "Region": "South America"
            },
            {
                "Rank": "5",
                "Player": "Zhilkan",
                "Time": "15m 10s",
                "Platform": "EMU",
                "Country": "Murcia, Spain",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "6",
                "Player": "Sunnard",
                "Time": "15m 12s",
                "Platform": "EMU",
                "Country": "France",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "7",
                "Player": "NotGorilla",
                "Time": "15m 12s",
                "Platform": "EMU",
                "Country": "Stockholm, Sweden",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "8",
                "Player": "KANNO",
                "Time": "15m 13s",
                "Platform": "EMU",
                "Country": "Japan",
                "Stars": "16-Stars",
                "Region": "Asia"
            },
            {
                "Rank": "9",
                "Player": "taihou",
                "Time": "15m 16s",
                "Platform": "EMU",
                "Country": "Japan",
                "Stars": "16-Stars",
                "Region": "Asia"
            },
            {
                "Rank": "10",
                "Player": "ZUMMI",
                "Time": "15m 20s",
                "Platform": "EMU",
                "Country": "Italy",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "11",
                "Player": "MrDasho",
                "Time": "15m 22s",
                "Platform": "EMU",
                "Country": "Ecuador",
                "Stars": "16-Stars",
                "Region": "South America"
            },
            {
                "Rank": "12",
                "Player": "Cysse",
                "Time": "15m 26s",
                "Platform": "EMU",
                "Country": "France",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "13",
                "Player": "ShaDowSPoweR",
                "Time": "15m 27s",
                "Platform": "EMU",
                "Country": "Picardie, France",
                "Stars": "16-Stars",
                "Region": "Europe"
            },
            {
                "Rank": "14",
                "Player": "TriforceTK",
                "Time": "15m 29s",
                "Platform": "EMU",
                "Country": "USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },
            {
                "Rank": "15",
                "Player": "dumpdome64",
                "Time": "15m 30s",
                "Platform": "EMU",
                "Country": "Pennsylvania, USA",
                "Stars": "16-Stars",
                "Region": "USA"
            },

        // 16 Star ends

        {
            "Rank": "1",
            "Player": "Suigi",
            "Time": "6m 57s 580ms",
            "Platform": "N64",
            "Country": "Canada",
            "Stars": "1-Stars",
            "Region": "USA"
        },
        {
            "Rank": "2",
            "Player": "Tag609",
            "Time": "7m 03s 960ms",
            "Platform": "N64",
            "Country": "USA",
            "Stars": "1-Stars",
            "Region": "California, USA"
        },
        {
            "Rank": "3",
            "Player": "cjrokokomero",
            "Time": "7m 06s",
            "Platform": "N64",
            "Country": "Italy",
            "Stars": "1-Stars",
            "Region": "Tuscany, Italy"
        },
        {
            "Rank": "4",
            "Player": "KANNO",
            "Time": "7m 07s 320ms",
            "Platform": "N64",
            "Country": "Japan",
            "Stars": "1-Stars",
            "Region": "Asia"
        },
        {
            "Rank": "5",
            "Player": "Weegee",
            "Time": "7m 08s 960ms",
            "Platform": "N64",
            "Country": "USA",
            "Stars": "1-Stars",
            "Region": "Michigan, USA"
        },
        {
            "Rank": "6",
            "Player": "Nils",
            "Time": "7m 11s 830ms",
            "Platform": "N64",
            "Country": "Sweden",
            "Stars": "1-Stars",
            "Region": "Europe"
        },
        {
            "Rank": "7",
            "Player": "Dowsky",
            "Time": "7m 11s 930ms",
            "Platform": "N64",
            "Country": "USA",
            "Stars": "1-Stars",
            "Region": "USA"
        },
        {
            "Rank": "8",
            "Player": "Poke",
            "Time": "7m 12s 960ms",
            "Platform": "N64",
            "Country": "USA",
            "Stars": "1-Stars",
            "Region": "USA"
        },
        {
            "Rank": "9",
            "Player": "treybordo",
            "Time": "7m 14s 760ms",
            "Platform": "N64",
            "Country": "USA",
            "Stars": "1-Stars",
            "Region": "USA"
        },
        {
            "Rank": "10",
            "Player": "Banova8",
            "Time": "7m 14s 800ms",
            "Platform": "N64",
            "Country": "France",
            "Stars": "1-Stars",
            "Region": "Europe"
        },
        {
            "Rank": "11",
            "Player": "Parsee02",
            "Time": "7m 17s 330ms",
            "Platform": "N64",
            "Country": "Japan",
            "Stars": "1-Stars",
            "Region": "Asia"
        },
        {
            "Rank": "12",
            "Player": "spener1122",
            "Time": "7m 19s 630ms",
            "Platform": "N64",
            "Country": "Canada",
            "Stars": "1-Stars",
            "Region": "USA"
        },
        {
            "Rank": "13",
            "Player": "Majoog",
            "Time": "7m 21s 460ms",
            "Platform": "N64",
            "Country": "South Korea",
            "Stars": "1-Stars",
            "Region": "Asia"
        },
        {
            "Rank": "14",
            "Player": "Xiah",
            "Time": "7m 21s 570ms",
            "Platform": "N64",
            "Country": "Japan",
            "Stars": "1-Stars",
            "Region": "Asia"
        },
        {
            "Rank": "15",
            "Player": "xandrey64",
            "Time": "7m 22s 330ms",
            "Platform": "N64",
            "Country": "Costa Rica",
            "Stars": "1-Stars",
            "Region": "Central America"
        },
        {
            "Rank": "1",
            "Player": "Finnii602",
            "Time": "7m 18s",
            "Platform": "VC",
            "Country": "Germany",
            "Stars": "1-Stars",
            "Region": "Europe"
        },
        {
            "Rank": "2",
            "Player": "BigCheese",
            "Time": "7m 28s",
            "Platform": "VC",
            "Country": "USA",
            "Stars": "1-Stars",
            "Region": "West Virginia, USA"
        },
        {
            "Rank": "3",
            "Player": "KANNO",
            "Time": "7m 32s",
            "Platform": "Switch",
            "Country": "Japan",
            "Stars": "1-Stars",
            "Region": "Asia"
        },
        {
            "Rank": "4",
            "Player": "Aleph64",
            "Time": "7m 38s",
            "Platform": "VC",
            "Country": "Germany",
            "Stars": "1-Stars",
            "Region": "Lower Saxony, Germany"
        },
        {
            "Rank": "5",
            "Player": "CyanogenSm64",
            "Time": "7m 38s",
            "Platform": "Switch",
            "Country": "Uzbekistan",
            "Stars": "1-Stars",
            "Region": "Asia"
        },
        {
            "Rank": "6",
            "Player": "PhoenixAUS",
            "Time": "7m 39s",
            "Platform": "VC",
            "Country": "USA",
            "Stars": "1-Stars",
            "Region": "USA"
        },
        {
            "Rank": "7",
            "Player": "CapnSR",
            "Time": "7m 49s",
            "Platform": "VC",
            "Country": "Canada",
            "Stars": "1-Stars",
            "Region": "USA"
        },
        {
            "Rank": "8",
            "Player": "Lojen",
            "Time": "7m 52s",
            "Platform": "VC",
            "Country": "USA",
            "Stars": "1-Stars",
            "Region": "USA"
        },
        {
            "Rank": "9",
            "Player": "darkdog47",
            "Time": "7m 53s",
            "Platform": "VC",
            "Country": "USA",
            "Stars": "1-Stars",
            "Region": "USA"
        },
        {
            "Rank": "10",
            "Player": "Erthide",
            "Time": "7m 54s",
            "Platform": "VC",
            "Country": "Canada",
            "Stars": "1-Stars",
            "Region": "Québec, Canada"
        },
        {
            "Rank": "11",
            "Player": "360Chrism",
            "Time": "7m 55s",
            "Platform": "VC",
            "Country": "Germany",
            "Stars": "1-Stars",
            "Region": "Europe"
        },
        {
            "Rank": "12",
            "Player": "TobiiSR",
            "Time": "7m 57s",
            "Platform": "VC",
            "Country": "Austria",
            "Stars": "1-Stars",
            "Region": "Lower Austria, Austria"
        },
        {
            "Rank": "13",
            "Player": "heeheex2",
            "Time": "8m 00s",
            "Platform": "VC",
            "Country": "Canada",
            "Stars": "1-Stars",
            "Region": "British Columbia, Canada"
        },
        {
            "Rank": "14",
            "Player": "Luisito",
            "Time": "8m 01s",
            "Platform": "VC",
            "Country": "Mexico",
            "Stars": "1-Stars",
            "Region": "USA"
        },
        {
            "Rank": "15",
            "Player": "chlidlunk",
            "Time": "8m 05s",
            "Platform": "VC",
            "Country": "France",
            "Stars": "1-Stars",
            "Region": "Europe"
        },

        // 1 star ends
    ];

    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={SpeedData} />);

})();
