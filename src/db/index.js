import * as SQLite  from 'expo-sqlite'

const db = SQLite.openDatabase('user.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, userId TEXT NOT NULL, token TEXT NOT NULL)',
            [],
            () => { resolve() },
            (_, err) => { reject(err)})
        })
        db.transaction((tx) =>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS cards (ord INTEGER PRIMARY KEY NOT NULL, id INTEGER NOT NULL, name TEXT NOT NULL, image TEXT NOT NULL, types TEXT NOT NULL)',
            [],
            () => { resolve() },
            (_, err) => { reject(err)})
        })
    })
    return promise
}

export const insertUserId = (
    userId,
    token
    ) => {
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO user (userID, token) VALUES (?, ?)', [userId, token],
                (_, result) => (resolve(result),
                (_, err => reject(err)))
            )
        })
    })
    return promise
}

export const fetchUserId = () => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM user;',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const insertCard = (
    id,
    name,
    image,
    types
) => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO cards (id, name, image, types) VALUES (?, ?, ?, ?)', [id, name, image, types],
                (_, result) => (resolve(result),
                (_, err => reject(err)))
            )
        })
    })
    return promise
}

export const fetchPokes = () => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM cards;',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}