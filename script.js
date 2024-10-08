let players = {
    None: '---',
    Anteffe: 'Anteffe',
    BlackDaddy: 'BlackDaddy',
    BlackPearl: 'BlackPearl',
    Blaenk: 'Blaenk',
    Chibrax: 'Chibrax',
    Chrome: 'Chrôme',
    Caviar: 'Caviar',
    Dahra: 'Dahra',
    Darfrost: 'Darfrost',
    Franco: 'Franco',
    Kamii: 'Kamii',
    Koko: 'Koko',
    MorteKouilles: 'MorteKouilles',
    Nono: 'Nono',
    Viictoriia: 'Viictoriia',
    Z: 'Takezo'
}

let champions = {
    None: '---',
    Aatrox: 'Aatrox',
    Akali: 'Akali',
    Akshan: 'Akshan',
    Alistar: 'Alistar',
    Annie: 'Annie',
    Ashe: 'Ashe',
    Blitzcrank: 'Blitzcrank',
    Brand: 'Brand',
    Braum: 'Braum',
    Camille: 'Camille',
    Darius: 'Darius',
    Diana: 'Diana',
    Draven: 'Draven',
    Ekko: 'Ekko',
    Ezreal: 'Ezreal',
    Fiddlesticks: 'Fiddlesticks',
    Fiora: 'Fiora',
    Fizz: 'Fizz',
    Galio: 'Galio',
    Garen: 'Garen',
    Graves: 'Graves',
    Jarvan: 'Jarvan IV',
    Jax: 'Jax',
    Jayce: 'Jayce',
    Jhin: 'Jhin',
    Jinx: 'Jinx',
    Kalista: 'Kalista',
    Kennen: 'Kennen',
    Khazix: 'Khazix',
    Kindred: 'Kindred',
    Lillia: 'Lillia',
    Lucian: 'Lucian',
    Lux: 'Lux',
    Malphite: 'Malphite',
    Mordekaiser: 'Mordekaiser',
    Morgana: 'Morgana',
    Mundo: 'Mundo',
    Nasus: 'Nasus',
    Nautilus: 'Nautilus',
    Nunu: 'Nunu',
    Pantheon: 'Pantheon',
    Renekton: 'Renekton',
    Senna: 'Senna',
    Seraphine: 'Seraphine',
    Sett: 'Sett',
    Shen: 'Shen',
    Shyvana: 'Shyvana',
    Soraka: 'Soraka',
    Swain: 'Swain',
    Twitch: 'Twitch',
    Urgot: 'Urgot',
    Vayne: 'Vayne',
    Veigar: 'Veigar',
    Vex: 'Vex',
    Xayah: 'Xayah',
    Xin: 'Xin Zhao',
    Yasuo: 'Yasuo',
    Yone: 'Yone',
    Warwick: 'Warwick',
    Ziggs: 'Ziggs',
    Zyra: 'Zyra',
}

let matches = {
    M1: {
        R1: {
            T1: {
                P1: {
                    name: players.MorteKouilles,
                    champion: champions.Camille,

                },
                P2: {
                    name: players.Caviar,
                    champion: champions.Ashe
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Anteffe,
                    champion: champions.Garen
                },
                P2: {
                    name: players.Nono,
                    champion: champions.Yasuo
                },
                win: true
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.MorteKouilles,
                    champion: champions.Aatrox
                },
                P2: {
                    name: players.Caviar,
                    champion: champions.Vayne
                },
                win: true
            },
            T2: {
                P1: {
                    name: players.Anteffe,
                    champion: champions.Lux
                },
                P2: {
                    name: players.Nono,
                    champion: champions.Ashe
                },
                win: false
            }
        },
        R3: {
            T1: {
                P1: {
                    name: players.MorteKouilles,
                    champion: champions.Swain
                },
                P2: {
                    name: players.Caviar,
                    champion: champions.Nautilus
                },
                win: true
            },
            T2: {
                P1: {
                    name: players.Anteffe,
                    champion: champions.Seraphine
                },
                P2: {
                    name: players.Nono,
                    champion: champions.Vayne
                },
                win: false
            }
        }
    },
    M2: {
        R1: {
            T1: {
                P1: {
                    name: players.BlackPearl,
                    champion: champions.Xayah
                },
                P2: {
                    name: players.Viictoriia,
                    champion: champions.Urgot
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Darfrost,
                    champion: champions.Veigar
                },
                P2: {
                    name: players.Koko,
                    champion: champions.Akshan
                },
                win: true
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.BlackPearl,
                    champion: champions.Ekko
                },
                P2: {
                    name: players.Viictoriia,
                    champion: champions.Shen
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Darfrost,
                    champion: champions.Annie
                },
                P2: {
                    name: players.Koko,
                    champion: champions.Vayne
                },
                win: true
            }
        }
    },
    M3: {
        R1: {
            T1: {
                P1: {
                    name: players.Z,
                    champion: champions.Yasuo
                },
                P2: {
                    name: players.Franco,
                    champion: champions.Mundo
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Chrome,
                    champion: champions.Aatrox
                },
                P2: {
                    name: players.Blaenk,
                    champion: champions.Jax
                },
                win: true
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.Z,
                    champion: champions.Renekton
                },
                P2: {
                    name: players.Franco,
                    champion: champions.Morgana
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Chrome,
                    champion: champions.Vayne
                },
                P2: {
                    name: players.Blaenk,
                    champion: champions.Diana
                },
                win: true
            }
        }
    },
    M4: {
        R1: {
            T1: {
                P1: {
                    name: players.Dahra,
                    champion: champions.Malphite
                },
                P2: {
                    name: players.BlackDaddy,
                    champion: champions.Jinx
                },
                win: true
            },
            T2: {
                P1: {
                    name: players.Kamii,
                    champion: champions.Yone
                },
                P2: {
                    name: players.Chibrax,
                    champion: champions.Lucian
                },
                win: false
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.Dahra,
                    champion: champions.Akali
                },
                P2: {
                    name: players.BlackDaddy,
                    champion: champions.Pantheon
                },
                win: true
            },
            T2: {
                P1: {
                    name: players.Kamii,
                    champion: champions.Khazix
                },
                P2: {
                    name: players.Chibrax,
                    champion: champions.Galio
                },
                win: false
            }
        }
    },
    M5: {
        R1: {
            T1: {
                P1: {
                    name: players.Darfrost,
                    champion: champions.Galio
                },
                P2: {
                    name: players.Koko,
                    champion: champions.Graves
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.MorteKouilles,
                    champion: champions.Renekton
                },
                P2: {
                    name: players.Caviar,
                    champion: champions.Jhin
                },
                win: true
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.Darfrost,
                    champion: champions.Nautilus
                },
                P2: {
                    name: players.Koko,
                    champion: champions.Akshan
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.MorteKouilles,
                    champion: champions.Fizz
                },
                P2: {
                    name: players.Caviar,
                    champion: champions.Jinx
                },
                win: true
            }
        }
    },
    M6: {
        R1: {
            T1: {
                P1: {
                    name: players.Chrome,
                    champion: champions.Twitch
                },
                P2: {
                    name: players.Blaenk,
                    champion: champions.Braum
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Dahra,
                    champion: champions.Kindred
                },
                P2: {
                    name: players.BlackDaddy,
                    champion: champions.Alistar
                },
                win: true
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.Chrome,
                    champion: champions.Draven
                },
                P2: {
                    name: players.Blaenk,
                    champion: champions.Nasus
                },
                win: true
            },
            T2: {
                P1: {
                    name: players.Dahra,
                    champion: champions.Fiora
                },
                P2: {
                    name: players.BlackDaddy,
                    champion: champions.Kalista
                },
                win: false
            }
        },
        R3: {
            T1: {
                P1: {
                    name: players.Chrome,
                    champion: champions.Kennen
                },
                P2: {
                    name: players.Blaenk,
                    champion: champions.Sett
                },
                win: true
            },
            T2: {
                P1: {
                    name: players.Dahra,
                    champion: champions.Senna
                },
                P2: {
                    name: players.BlackDaddy,
                    champion: champions.Fiddlesticks
                },
                win: false
            }
        }
    },
    M7: {
        R1: {
            T1: {
                P1: {
                    name: players.BlackPearl,
                    champion: champions.Jax
                },
                P2: {
                    name: players.Viictoriia,
                    champion: champions.Draven
                },
                win: true
            },
            T2: {
                P1: {
                    name: players.Anteffe,
                    champion: champions.Ezreal
                },
                P2: {
                    name: players.Nono,
                    champion: champions.Yasuo
                },
                win: false
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.BlackPearl,
                    champion: champions.Blitzcrank
                },
                P2: {
                    name: players.Viictoriia,
                    champion: champions.Jhin
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Anteffe,
                    champion: champions.Garen
                },
                P2: {
                    name: players.Nono,
                    champion: champions.Jinx
                },
                win: true
            }
        },
        R3: {
            T1: {
                P1: {
                    name: players.BlackPearl,
                    champion: champions.Darius
                },
                P2: {
                    name: players.Viictoriia,
                    champion: champions.Ziggs
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Anteffe,
                    champion: champions.Jhin
                },
                P2: {
                    name: players.Nono,
                    champion: champions.Seraphine
                },
                win: true
            }
        }
    },
    M8: {
        R1: {
            T1: {
                P1: {
                    name: players.Z,
                    champion: champions.Kalista
                },
                P2: {
                    name: players.Franco,
                    champion: champions.Warwick
                },
                win: true
            },
            T2: {
                P1: {
                    name: players.Kamii,
                    champion: champions.Thresh
                },
                P2: {
                    name: players.Chibrax,
                    champion: champions.Xayah
                },
                win: false
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.Z,
                    champion: champions.Yone
                },
                P2: {
                    name: players.Franco,
                    champion: champions.Xin
                },
                win: true
            },
            T2: {
                P1: {
                    name: players.Kamii,
                    champion: champions.Akali
                },
                P2: {
                    name: players.Chibrax,
                    champion: champions.Soraka
                },
                win: false
            }
        }
    },
    M9: {
        R1: {
            T1: {
                P1: {
                    name: players.Darfrost,
                    champion: champions.Malphite
                },
                P2: {
                    name: players.Koko,
                    champion: champions.Annie
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Anteffe,
                    champion: champions.Pantheon
                },
                P2: {
                    name: players.Nono,
                    champion: champions.Renekton
                },
                win: true
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.Darfrost,
                    champion: champions.Mordekaiser
                },
                P2: {
                    name: players.Koko,
                    champion: champions.Zyra
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Anteffe,
                    champion: champions.Lucian
                },
                P2: {
                    name: players.Nono,
                    champion: champions.Jax
                },
                win: true
            }
        },
    },
    M12: {
        R1: {
            T1: {
                P1: {
                    name: players.MorteKouilles,
                    champion: champions.Yone
                },
                P2: {
                    name: players.Caviar,
                    champion: champions.Shen
                },
                win: true
            },
            T2: {
                P1: {
                    name: players.Chrome,
                    champion: champions.Ezreal
                },
                P2: {
                    name: players.Blaenk,
                    champion: champions.Jayce
                },
                win: false
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.MorteKouilles,
                    champion: champions.Brand
                },
                P2: {
                    name: players.Caviar,
                    champion: champions.Vex
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Chrome,
                    champion: champions.Lillia
                },
                P2: {
                    name: players.Blaenk,
                    champion: champions.Jarvan
                },
                win: true
            }
        },
        R3: {
            T1: {
                P1: {
                    name: players.MorteKouilles,
                    champion: champions.Akali
                },
                P2: {
                    name: players.Caviar,
                    champion: champions.Shyvana
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.Chrome,
                    champion: champions.Urgot
                },
                P2: {
                    name: players.Blaenk,
                    champion: champions.Nunu
                },
                win: true
            }
        }
    },
}

let futureMatches = {
    M10: {
        R1: {
            T1: {
                P1: {
                    name: players.Dahra,
                    champion: champions.None
                },
                P2: {
                    name: players.BlackDaddy,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.Dahra,
                    champion: champions.None
                },
                P2: {
                    name: players.BlackDaddy,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
        R3: {
            T1: {
                P1: {
                    name: players.Dahra,
                    champion: champions.None
                },
                P2: {
                    name: players.BlackDaddy,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        }
    },
    M11: {
        R1: {
            T1: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
        R3: {
            T1: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
    },
    M13: {
        R1: {
            T1: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
        R3: {
            T1: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
    },
    M14: {
        R1: {
            T1: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
        R2: {
            T1: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
        R3: {
            T1: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            },
            T2: {
                P1: {
                    name: players.None,
                    champion: champions.None
                },
                P2: {
                    name: players.None,
                    champion: champions.None
                },
                win: false
            }
        },
    },
}

function displayMatchResults() {
    const row = $('#row')

    for (let match in matches) {
        const card = $('<div>', {
            class: "card my-3 col-lg-11 col-12-sm ms-2 p-0"
        }).prependTo(row)

        $('<div>', {
            class: "card-header text-bg-tertiary"
        }).text(`Match ${match}`)
            .appendTo(card)

        const cardBody = $('<div>', {
            class: "card-body text-center"
        }).appendTo(card)

        const row1 = $('<div>', {
            class: "row mb-3 font-weight-bold border-bottom"
        }).appendTo(cardBody)

        let firstRound = matches[match].R1;
        $('<h5>', {
            class: "col-5 text-end"
        }).text(`${firstRound.T1.P1.name} & ${firstRound.T1.P2.name}`).appendTo(row1)

        $('<h5>', {
            class: "col-2"
        }).text("vs").appendTo(row1)

        $('<h5>', {
            class: "col-5 text-start"
        }).text(`${firstRound.T2.P1.name} & ${firstRound.T2.P2.name}`).appendTo(row1)

        // Initialize scores for the match
        let team1Win = 0;
        let team2Win = 0;

        // Loop through each round and display the champions and scores
        for (let round in matches[match]) {

            let roundData = matches[match][round];

            // Team 1: T1.P1 and T1.P2
            if (roundData.T1.win) team1Win++;

            // Team 2: T2.P1 and T2.P2
            if (roundData.T2.win) team2Win++;

            const row2 = $('<div>', {
                class: "row mb-3 font-weight-bold"
            }).appendTo(cardBody)

            $('<p>', {
                class: "col-5 text-end pe-5"
            }).text(`${roundData.T1.P1.champion} & ${roundData.T1.P2.champion}`).appendTo(row2)

            $('<p>', {
                class: `col-2 badge p-1 d-inline-flex align-items-center justify-content-center ${(team1Win === 2 || team2Win === 2) ? 'text-bg-success' : 'text-bg-danger'}`,
                style: "font-size:18px"
            }).text(`${team1Win}:${team2Win}`).appendTo(row2)

            $('<p>', {
                class: "col-5 text-start ps-5"
            }).text(`${roundData.T2.P1.champion} & ${roundData.T2.P2.champion}`).appendTo(row2)
        }
    }
}

function calculateChampionStats() {
    let championStats = {};

    // Loop through all matches and gather champion data
    for (let match in matches) {
        for (let round in matches[match]) {
            let roundData = matches[match][round];

            // Process each team in the round
            for (let team in roundData) {
                if (team === 'win') continue;  // Skip the 'win' property

                let teamData = roundData[team];
                let isWin = teamData.win;

                // Process each player's data in the team
                for (let player in teamData) {
                    let champion = teamData[player].champion;


                    // Initialize champion stats if it doesn't exist
                    if (!championStats[champion]) {
                        championStats[champion] = {total: 0, wins: 0, losses: 0};
                    }

                    // Increment total appearances
                    championStats[champion].total++;

                    // Increment wins or losses
                    if (isWin) {
                        championStats[champion].wins++;
                    } else {
                        championStats[champion].losses++;
                    }
                }
            }
        }
    }

    // Calculate win rates and prepare sorted list
    let sortedChampions = Object.keys(championStats).map(champion => {
        let stats = championStats[champion];
        return {
            champion: champion,
            winRate: (stats.wins / stats.total) * 100,
            wins: stats.wins,
            losses: stats.losses
        };
    }).sort((a, b) => {
        if (b.wins !== a.wins) {
            return b.wins - a.wins;
        }
        if (b.winRate !== a.winRate) {
            return b.winRate - a.winRate;
        }
        return a.losses - b.losses;
    });



    const motherRow = $('#motherRow')

    const statsColumn = $('<div>', {
        class: "card my-3 col-lg-4 col-sm-12 pt-1"
    }).appendTo(motherRow)

    $('<h4>', {
        class: "font-weight-bold text-center mb-3"
    }).text("Champion Stats").appendTo(statsColumn);

    const champRow = $('<ol>', {
        class: "row"
    }).appendTo(statsColumn)

    $('<h5>', {
        class: "col-5 mb-3"
    }).text("Champion").appendTo(champRow);

    $('<h5>', {
        class: "col-2 text-center mb-3"
    }).text("W").appendTo(champRow)

    $('<h5>', {
        class: "col-2 text-center mb-3"
    }).text("L").appendTo(champRow)

    $('<h5>', {
        class: "col-3 text-center mb-3"
    }).text("WR in %").appendTo(champRow)

    sortedChampions.forEach(stat => {

        if (stat.champion !== 'undefined' && stat.champion !== '---') {
            $('<li>', {
                class: "col-5" // Ensure list items are full-width for proper alignment
            }).append(
                $('<h5>').text(stat.champion)
            ).appendTo(champRow);

            $('<h5>', {
                class: "col-2 text-center"
            }).text(stat.wins).appendTo(champRow)

            $('<h5>', {
                class: "col-2 text-center"
            }).text(stat.losses).appendTo(champRow)

            $('<h5>', {
                class: "col-3 text-center"
            }).text(Math.round(stat.winRate) + '%').appendTo(champRow)
        }
    })
}


calculateChampionStats();
displayMatchResults();

