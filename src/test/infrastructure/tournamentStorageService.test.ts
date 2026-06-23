import { beforeEach, describe, expect, it } from "vitest";
import { TournamentStorageService } from "../../services/tournament-storage/TournamentStorageService";
import { createTestTournament } from "../domain/helpers/createTestTournamen";

// Mock para simular localStorage para los test
const createLocalStorageMock = (): Storage => {
    let store: Record<string, string> = {};

    return {
        get length() {
            return Object.keys(store).length;
        },
        key: (index: number) => Object.keys(store)[index] ?? null,
        getItem: (key: string) => store[key] ?? null,
        setItem: (key: string, value: string) => { store[key] = value; },
        removeItem: (key: string) => { delete store[key]; },
        clear: () => { store = {}; },
    };
};

const localStorageMock = createLocalStorageMock();
globalThis.localStorage = localStorageMock;

describe("TournamentStorageService", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    // 1
    it("should return empty array when storage is empty", () =>{
        const service = new TournamentStorageService();

        const result = service.getAll();
        expect(result).toEqual([]);
        expect(result).not.toBeNull();
        expect(result).not.toBe(undefined);
    });

    // 2
    it("should store a tournament", () => {
        const service = new TournamentStorageService();

        const tournament = createTestTournament();

        service.create(tournament);

        const data = service.getAll();

        expect(data).toHaveLength(1);
        expect(data[0].id).toBe(tournament.id);
    });

    // 3
    it("should retrieve a tournament by its id", () => {
        const service = new TournamentStorageService();
        const tournament = createTestTournament({id: "t1"});

        service.create(tournament);
        const data = service.getById("t1");

        expect(data).toEqual(tournament);
        expect(data.id).toBe("t1");
        expect(data).not.toBeNull();
    });
    
    // 4
    it("should return null when tournament does not exist", () => {
        const service = new TournamentStorageService();
        const tournament = createTestTournament({id: "t1"});
    
        service.create(tournament);
        const data = service.getById("t2");
    
        expect(data).toBeNull();
    });
    
    // 5
    it("should remove a tournament when deleting by id", () => {
        const service = new TournamentStorageService();
        const tournament = createTestTournament({id:"t1"});
        const tournament2 = createTestTournament({id:"t2"});
        
        service.create(tournament);
        service.create(tournament2);
        service.delete("t1");
        const data = service.getAll();
        const deltedTorunament = data.some((t) => t.id === "t1");
    
        expect(data).toHaveLength(1);
        expect(deltedTorunament).toBe(false);
    });
    
    // 6
    it("should update an existing tournament correclty", () => {
        const service = new TournamentStorageService();
        const tournament = createTestTournament({id:"t1" ,name:"old"});
        
        service.create(tournament);
        const newObject = {...tournament, name: "new"};
        service.update(newObject);
        const data = service.getAll().filter((t) => t.id === "t1");
    
        expect(data).toHaveLength(1);
        expect(data[0].name).toBe("new");
    });
    
    // 7
    it("should not modify state when deleting a non-existing tournament", () => {
        const service = new TournamentStorageService();
        const tournament = createTestTournament({id:"t1"});
        
        service.create(tournament);
        service.delete("t2");
        const data = service.getAll();
    
        expect(data).toHaveLength(1);
        expect(data[0].id).toBe("t1");
    });
    
    // 8
    it("should recover from corrupted JSON and return default state", () => {
        const service = new TournamentStorageService();
        localStorage.setItem("tournaments:v1", "Estructura rota");

        const data = service.getAll();
    
        expect(data).toEqual([]);
        expect(data).toHaveLength(0);
    });
});