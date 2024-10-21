package com.ensias.springdatarest;

import com.ensias.springdatarest.web.VoitureController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)

@SpringBootTest
class SpringDataRestApplicationTests {

    @Autowired
    VoitureController voitureController;
    @Test
//indique que cette méthode peut être exécutée comme un cas de test
    void contextLoads() {
        assertThat(voitureController).isNotNull();
//on teste si l’instance du contrôleur a été créé et injectée avec succès.
    }
    }
