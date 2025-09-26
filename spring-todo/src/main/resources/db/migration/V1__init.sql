-- Users
CREATE TABLE todo_user
(
    id   BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT   NOT NULL
);

-- TodoLists
-- Users 1:* TodoLists
CREATE TABLE todo_list
(
    id      BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title   TEXT   NOT NULL,
    user_id BIGINT NOT NULL REFERENCES todo_user (id) ON DELETE CASCADE
);

-- TodoItems
CREATE TABLE todo_item
(
    id           BIGINT  NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title        TEXT    NOT NULL,
    completed    BOOLEAN NOT NULL DEFAULT FALSE,
    todo_list_id BIGINT  NOT NULL REFERENCES todo_list (id) ON DELETE CASCADE
);








