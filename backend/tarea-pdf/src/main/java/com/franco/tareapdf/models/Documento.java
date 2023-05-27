package com.franco.tareapdf.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Map;
import java.util.Set;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "documento")
public class Documento {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String docname;
    private String documento;

    @ElementCollection
    private Set<String> metadata;

    @ElementCollection
    @MapKeyColumn(name = "email_index")
    @Column(name = "direccion_email")
    private Map<Integer, String> listaEmails;

    private String fecha;
    private String urlCallback;

    // Constructor, getters, setters, etc.
}

