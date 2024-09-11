let players = {
    MorteKouilles: 'MorteKouilles',
    Caviar: 'Caviar',
    Anteffe: 'Anteffe',
    Nono: 'Nono',
    BlackPearl: 'BlackPearl',
    Viictoriia: 'Viictoriia',
    Darfrost: 'Darfrost',
    Koko: 'Koko'
};

let champions = {
    Camille: 'Camille',
    Ashe: 'Ashe',
    Garen: 'Garen',
    Yasuo: 'Yasuo',
    Aatrox: 'Aatrox',
    Swain: 'Swain',
    Nautilus: 'Nautilus',
    Lux: 'Lux',
    Seraphine: 'Seraphine',
    Vayne: 'Vayne',
    Xayah: 'Xayah',
    Urgot: 'Urgot',
    Veigar: 'Veigar',
    Akshan: 'Akshan',
    Ekko: 'Ekko',
    Shen: 'Shen',
    Annie: 'Annie'
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
    }
}

function displayMatchResults() {
    const row = $('#row')

    for (let match in matches) {
        const card = $('<div>', {
            class: "card my-3 col-11 p-0"
        }).appendTo(row)

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
        $('<h4>', {
            class: "col-5 text-end"
        }).text(`${firstRound.T1.P1.name} & ${firstRound.T1.P2.name}`).appendTo(row1)

        $('<h4>', {
            class: "col-2"
        }).text("vs").appendTo(row1)

        $('<h4>', {
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

            $('<h5>', {
                class: "col-5 text-end pe-5"
            }).text(`${roundData.T1.P1.champion} & ${roundData.T1.P2.champion}`).appendTo(row2)

            $('<h1>', {
                class: `col-2 badge p-1 ${(team1Win === 2 || team2Win === 2) ? 'text-bg-success' : 'text-bg-danger'}`,
                style: "font-size:18px"
            }).text(`${team1Win}:${team2Win}`).appendTo(row2)

            $('<h5>', {
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
                let isWin = roundData.win;

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
                    if (team === 'T1' && isWin) {
                        championStats[champion].wins++;
                    } else if (team === 'T2' && !isWin) {
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
    }).sort((a, b) => b.wins - a.wins);  // Sort by number of wins in descending order

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
    }).text("Winrate").appendTo(champRow)

    sortedChampions.forEach(stat => {

        if (stat.champion !== 'undefined') {
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

