import React, { useEffect, useState, useMemo } from 'react';

import api from '../../services/api';
import { Container, Card, Grid, GridHeader, Techs, Tech, TechSelect } from './styles';

interface IRepository {
    name: string;
    html_url: string;
    topics: string[];
}

type ActiveTopic = "all" | "reactjs" | "nodejs" | "react-native" | "laravel";

const Projects: React.FC = () => {
    const [repositories, setRepositories] = useState<IRepository[]>([]);
    const [activeTopic, setActiveTopic] = useState<ActiveTopic>("reactjs");

    useEffect(() => {
        api.get<IRepository[]>('/users/gfoliver/repos?sort=pushed&per_page=100')
            .then(response => {
                console.log(response.data);
                setRepositories(response.data);
            })
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
                        <Tech onClick={() => setActiveTopic("laravel")} active={activeTopic === "laravel"}>Laravel</Tech>
                        <Tech onClick={() => setActiveTopic("react-native")} active={activeTopic === "react-native"}>React Native</Tech>
                        <Tech onClick={() => setActiveTopic("nodejs")} active={activeTopic === "nodejs"}>NodeJS</Tech>
                    </Techs>
                    <TechSelect onChange={e => setActiveTopic(e.target.value as ActiveTopic)} value={activeTopic}>
                        <option value="all">All</option>
                        <option value="reactjs">ReactJS</option>
                        <option value="laravel">Laravel</option>
                        <option value="react-native">React Native</option>
                        <option value="nodejs">NodeJS</option>
                    </TechSelect>
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