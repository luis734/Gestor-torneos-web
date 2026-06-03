import { describe, it, expect } from "vitest";
import { calculateStandings } from "../../features/tournament/services/standings/calculateStandings";
import type { Round } from "../../features/tournament/models/Round";
import { createRound } from "../../features/tournament/factories/createRound";
import { createTable } from "../../features/tournament//factories/createTable";

describe("calculateStandings", () => {
    it ("Returns empty standings when there are no rounds", () => {
        // Arrange
        const rounds: Round[] = [];

        // Act
        const result = calculateStandings(rounds, 0);

        // Assert
        expect(result).toEqual([]);
    });

    it("Ignores incomplete rounds", () => {

        // Arrange
        const completedRound = createRound({
            roundNumber: 1,
            tables: [
                createTable({
                    tableNumber: 1,
                    playerIds: ["p1", "p2"]
                })
            ]
        });

        completedRound.status = "completed";
        completedRound.tables[0].results = [
            {
                playerId: "p1",
                position: 1
            },
            {
                playerId: "p2",
                position: 2
            }
        ];
    
        const pendingRound = createRound({
            roundNumber: 2,
            tables: [
                createTable({
                    tableNumber: 1,
                    playerIds: ["p1", "p2"]
                })
            ]
        });

        pendingRound.tables[0].results = [
            {
                playerId: "p2",
                position: 1
            },
            {
                playerId: "p1",
                position: 2
            }
        ];
    
        // Act
        const result = calculateStandings([completedRound, pendingRound], 2);
    
        // Assert
        expect(result).toEqual([
            {
                playerId: "p1",
                totalPoints: 1,
                placements: [1],
                rank: 1
            },
            {
                playerId: "p2",
                totalPoints: 2,
                placements: [2],
                rank: 2
            }
        ]);
    
    });

    it ("Calculate accumulated points correctly", () => {
        // Arrange
        const completedRound1 = createRound({
            roundNumber: 1,
            tables: [
                createTable({
                    tableNumber: 1,
                    playerIds: ["p1", "p2"]
                })
            ]
        });

        completedRound1.status = "completed";
        completedRound1.tables[0].results = [
            {
                playerId: "p1",
                position: 1
            },
            {
                playerId: "p2",
                position: 2
            }
        ];
    
        const completedRound2 = createRound({
            roundNumber: 2,
            tables: [
                createTable({
                    tableNumber: 1,
                    playerIds: ["p1", "p2"]
                })
            ]
        });
        
        completedRound2.status = "completed";
        completedRound2.tables[0].results = [
            {
                playerId: "p1",
                position: 1
            },
            {
                playerId: "p2",
                position: 2
            }
        ];
        // Act
        const result = calculateStandings([completedRound1, completedRound2], 2);

        // Assert
        expect(result).toEqual([
            {
                playerId: "p1",
                totalPoints: 2,
                placements: [1, 1],
                rank: 1
            },
            {
                playerId: "p2",
                totalPoints: 4,
                placements: [2, 2],
                rank: 2
            }
        ]);
    });

    it ("Orders standings by lowest total points", () => {
        // Arrange
        const completedRound1 = createRound({
            roundNumber: 1,
            tables: [
                createTable({
                    tableNumber: 1,
                    playerIds: ["p1", "p2", "p3"]
                })
            ]
        });

        completedRound1.status = "completed";
        completedRound1.tables[0].results = [
            {
                playerId: "p2",
                position: 1
            },
            {
                playerId: "p1",
                position: 2
            },
            {
                playerId: "p3",
                position: 3
            }
        ];
    
        const completedRound2 = createRound({
            roundNumber: 2,
            tables: [
                createTable({
                    tableNumber: 1,
                    playerIds: ["p1", "p2", "p3"]
                })
            ]
        });
        
        completedRound2.status = "completed";
        completedRound2.tables[0].results = [
            {
                playerId: "p2",
                position: 1
            },
            {
                playerId: "p1",
                position: 2
            },
            {
                playerId: "p3",
                position: 3
            }
        ];
        // Act
        const result = calculateStandings([completedRound1, completedRound2], 3);

        // Assert
        expect(result).toEqual([
            {
                playerId: "p2",
                totalPoints: 2,
                placements: [1, 1],
                rank: 1
            },
            {
                playerId: "p1",
                totalPoints: 4,
                placements: [2, 2],
                rank: 2
            },
            {
                playerId: "p3",
                totalPoints: 6,
                placements: [3, 3],
                rank: 3
            }
        ]);
    });

    it ("Shared ranks and tie-break when total points are equal", () => {
        // Arrange
        const completedRound1 = createRound({
            roundNumber: 1,
            tables: [
                createTable({
                    tableNumber: 1,
                    playerIds: ["p1", "p2", "p3"]
                })
            ]
        });

        completedRound1.status = "completed";
        completedRound1.tables[0].results = [
            {
                playerId: "p1",
                position: 1
            },
            {
                playerId: "p2",
                position: 2
            },
            {
                playerId: "p3",
                position: 3
            }
        ];
    
        const completedRound2 = createRound({
            roundNumber: 2,
            tables: [
                createTable({
                    tableNumber: 1,
                    playerIds: ["p1", "p2", "p3"]
                })
            ]
        });
        
        completedRound2.status = "completed";
        completedRound2.tables[0].results = [
            {
                playerId: "p3",
                position: 1
            },
            {
                playerId: "p2",
                position: 2
            },
            {
                playerId: "p1",
                position: 3
            }
        ];
        // Act
        const result = calculateStandings([completedRound1, completedRound2], 3);

        // Assert
        expect(result).toEqual([
            {
                playerId: "p1",
                totalPoints: 4,
                placements: [1, 3],
                rank: 1
            },
            {
                playerId: "p3",
                totalPoints: 4,
                placements: [3, 1],
                rank: 1
            },
            {
                playerId: "p2",
                totalPoints: 4,
                placements: [2, 2],
                rank: 3
            }
        ]);
    });
});