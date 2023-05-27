package com.franco.tareapdf.repositories;

import java.util.List;

import com.franco.tareapdf.models.Documento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentoRepository extends JpaRepository<Documento, Long> {
}