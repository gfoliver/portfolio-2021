import React, { useEffect, useState, useMemo } from 'react';

import api from '../../services/api';
import { Container, Card, Grid, GridHeader, Techs, Tech } from './styles';

interface IRepository {
    name: string;
    html_url: string;
    topics: string[];
}

type ActiveTopic = "all" | "reactjs" | "nodejs" | "react-native";

const Projects: React.FC = () => {
    const [repositories, setRepositories] = useState<IRepository[]>([]);
    const [activeTopic, setActiveTopic] = useState<ActiveTopic>("reactjs");

    useEffect(() => {
        api.get<IRepository[]>('/users/gfoliver/repos?sort=pushed')
            .then(response => setRepositories(response.data))
            .catch(error => console.log(error));
    }, []);

    const filteredRepositories = useMemo(() => {
        if(activeTopic === "all")
            return repositories;

        return repositories.filter(repo => repo.topics.indexOf(activeTopic) !== -1);
    }, [activeTopic, repositories]);

    return (
        <Container>
            <div className="container">
                <h2>Projects</h2>
                <GridHeader>
                    <h4>Techs</h4>
                    <Techs>
                        <Tech onClick={() => setActiveTopic("all")} active={activeTopic === "all"}>All</Tech>
                        <Tech onClick={() => setActiveTopic("reactjs")} active={activeTopic === "reactjs"}>ReactJS</Tech>
                        <Tech onClick={() => setActiveTopic("nodejs")} active={activeTopic === "nodejs"}>NodeJS</Tech>
                        <Tech onClick={() => setActiveTopic("react-native")} active={activeTopic === "react-native"}>React Native</Tech>
                    </Techs>
                </GridHeader>
                <Grid>
                    {filteredRepositories.map(repository => (
                        <Card href={repository.html_url} target="_blank" key={repository.name}>
                            <div className="title">{repository.name}</div>
                            <div className="techs">
                                {repository.topics.map((topic, index) => index === repository.topics.length - 1 ? topic : topic + ', ')}
                            </div>
                        </Card>
                    ))}
                </Grid>
            </div>
        </Container>
    );
}

export default Projects;